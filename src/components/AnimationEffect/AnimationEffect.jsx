import { useState, useEffect } from "react";
import "./AnimationEffect.css";

const colors = ["#ebc800"];

const AnimationEffect = () => {
    const [circles, setCircles] = useState([]);

    // Function to handle the animation on mouse move
    const animateCircle = (event) => {
        const newCircle = {
            id: Date.now(),
            x: Math.min(window.innerWidth - 40, Math.max(0, event.clientX - 50 )),  // Constrain X within viewport
            y: Math.min(window.innerHeight - 40, Math.max(0, event.clientY - 50)), // Constrain Y within viewport
            color: colors,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);

        // Remove the circle after the animation (0.5s + small buffer)
        setTimeout(() => {
            setCircles((prevCircles) => prevCircles.filter(circle => circle.id !== newCircle.id));
          }, 1900);// 500ms animation + 100ms buffer
    };

    useEffect(() => {
        document.addEventListener("mousemove", animateCircle);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousemove", animateCircle);
        };
    }, []);

    return (
        <div>
            {circles.map((circle) => (
                <div
                    key={circle.id}
                    className="circle"
                    style={{
                        left: `${circle.x}px`,
                        top: `${circle.y}px`,
                        backgroundColor: circle.color,  // Set background color for each circle
                    }}
                ></div>
            ))}
        </div>
    );
};

export default AnimationEffect