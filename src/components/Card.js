import React, { Component } from 'react'
//import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'

//Componente funcional
const Card = ({title, description, img, leftColor, rightColor}) => (
    <div className="card mx-auto Fitness-Card"
        style={{
            backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor || '#2F80ED'}) `
        }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={img || emptyImg} className="float-right" />
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)
export default Card;



// Componentes de clases
// class Card extends Component {
//     render() {
//         const { title, description, img, leftColor, rightColor } = this.props;
//         return (

//             <div className="card mx-auto Fitness-Card"
//                 style={{
//                     backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
//                 }}
//             >
//                 <div className="card-body">
//                     <div className="row center">
//                         <div className="col-6">
//                             <img src={img|| emptyImg} className="float-right" />
//                         </div>
//                         <div className="col-6 Fitness-Card-Info">
//                             <h1>{title}</h1>
//                             <p>{description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Card;