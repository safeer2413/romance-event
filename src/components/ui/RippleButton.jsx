import React, { useState } from "react";

const withRipple = (Component) => {
    return ({ rippleColor = "rgba(236, 17, 134, 0.84)", className = "", children, ...props }) => {
        const [ripples, setRipples] = useState([]);

        const addRipple = (e) => {
            const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
            const y = e.clientY - e.currentTarget.getBoundingClientRect().top;
            const newRipple = { x, y, id: Date.now() };

            setRipples((prev) => [...prev, newRipple]);

            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
            }, 600);
        };

        return (
            <Component
                {...props}
                onMouseEnter={addRipple}
                onClick={addRipple}
                className={`relative overflow-hidden ${className}`}
            >
                {children}
                {ripples.map((r) => (
                    <span
                        key={r.id}
                        className="absolute rounded-full animate-ripple"
                        style={{
                            backgroundColor: rippleColor,
                            left: r.x,
                            top: r.y,
                            transform: "translate(-50%, -50%)",
                            width: 20,
                            height: 20,
                        }}
                    />
                ))}
            </Component>
        );
    };
};

export default withRipple;