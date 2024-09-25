import { useState, useEffect } from "react";
import "./AnimationEffect.css";

const colors = ["#ffffff"];

const AnimationEffect = () => {
    const [circles, setCircles] = useState([]);

    // Function to handle the animation on mouse move
    const animateCircle = (event) => {
        const newCircle = {
            id: Date.now(),
            x: Math.min(window.innerWidth , Math.max(0, event.clientX - 10 )),  
            y: Math.min(window.innerHeight , Math.max(0, event.clientY - 10)), 
            color: colors,
            gradient: `radial-gradient(circle, ${colors[0]}, #ffbd0913)`,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);

        // Remove the circle after the animation (0.5s + small buffer)
        setTimeout(() => {
            setCircles((prevCircles) => prevCircles.filter(circle => circle.id !== newCircle.id));
          }, 40000);// 500ms animation + 100ms buffer
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
                        background: `radial-gradient(circle, ${circle.color}, #ffbd0913)`, // Circular gradient with transparency
                    }}
                ></div>
            ))}
        </div>
    );
};

export default AnimationEffect