
import React, { useEffect } from 'react';
import './RippleButton.css';

export default function RippleButton({ type, id, className, ripple, onClick, style, children }) {
    useEffect(() => {
        const handleRipple = ({ pageX, pageY, currentTarget }) => {
            let x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
            let y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
            const rippleElement = document.createElement("span");
            const rippleColor = currentTarget.dataset.ripple || "#212129";
            rippleElement.classList.add("ripple-effect");
            rippleElement.style.background = rippleColor;

            currentTarget.appendChild(rippleElement);
            rippleElement.style.left = `${x}%`;
            rippleElement.style.top = `${y}%`;
            setTimeout(() => {
                rippleElement.remove();
            }, 700);
        };

        const btnRipple = document.querySelectorAll(".btn-ripple");
        btnRipple.forEach((btn) => {
            btn.addEventListener("click", handleRipple);
        });

        // Cleanup function to remove event listeners
        return () => {
            btnRipple.forEach((btn) => {
                btn.removeEventListener("click", handleRipple);
            });
        };
    }, []);

    return (
        <button
            type={type || "button"}
            id={id}
            className={`btn btn-ripple ${className || ""}`}
            data-ripple={ripple}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
}

// import React, { useEffect } from 'react';

// export default function RippleButton({type , id , className , ripple , onClick , style , children}){
//     useEffect(()=>{
//         const btnRipple = document.querySelectorAll(".btn-ripple");
//         btnRipple.forEach((btn)=>{
//             btn.onClick = ({pageX ,pageY, currentTarget}) =>{
//                 let x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
//                 let y = ((pageY - currentTarget.offsetTop) * 100) / currentTarget.offsetHeight;
//                 const ripple = document.createElement("span");
//                 const rippleColor = btn.dataset.ripple || "#212129";
//                 ripple.classList.add("ripple-effect");
//                 ripple.style.background = rippleColor;

//                 btn.appendChild(ripple);
//                 ripple.style.left = `${x}%`;
//                 ripple.style.top = `${y}%`;
//                 setTimeout(()=>{
//                     ripple.remove();
//                 },700)

//             }
//         })
//     },[])
//     return (
//         <button type={type ? type : "button"}
//             id={id} 
//             className={`btn btn-ripple ${className ? className : ""}`}
//             data-ripple ={ripple}
//             onClick={onClick}
//             style={style}
//            >
//             {children}
//         </button>
//     )
// }
