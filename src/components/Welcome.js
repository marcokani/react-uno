import React from 'react'
import './styles/Welcome.css'

const Welcome=({username})=>(
    <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {username} !</h1>
                <p>Bienvenido a un ejemplo</p>
            </div> 
        </div>
)
// function Welcome(props) {
//     return (
//         <div className="container">
//             <div className="Fitness-User-Info">
//                 <h1>Hola {props.username} !</h1>
//                 <p>Bienvenido a un ejemplo</p>
//             </div> 
//         </div>
//     )
// }
export default Welcome;