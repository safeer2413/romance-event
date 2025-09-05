import foodImg from "../../assets/Images/food-restaurant.png";

export default function LogoSVG() {
    return (

        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="-100 0 600 200"
                className="w-[100px] h-auto p-1 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-500"
            >

                <text
                    className="font-federant"
                    x="35%"
                    y="55%"
                    textAnchor="middle"
                    fontSize="85"
                    fontWeight="bold"
                    letterSpacing="4"
                    fill="black"
                >
                    ROMANCE
                </text>
                <text
                    className="font-federant"
                    x="35%"
                    y="75%"
                    textAnchor="middle"
                    fontSize="35"
                    letterSpacing="2"
                    fill="pink"
                >
                    Event Management
                </text>
                <image
                    href={foodImg}
                    x="-50"
                    y="0"
                    width="110"
                    height="110"
                    preserveAspectRatio="xMidYMid meet"
                    opacity="0.9"

                />
            </svg>
        </div>

    );
}