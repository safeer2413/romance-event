import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);

        const addHover = () => setHovering(true);
        const removeHover = () => setHovering(false);

        // hover links/buttons
        const links = document.querySelectorAll("a, button");
        links.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            links.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <div
            className={`heart-cursor ${hovering ? "scale-125" : ""}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px) rotate(-45deg)` }}
        />

    );
};

export default CustomCursor;