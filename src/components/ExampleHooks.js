import React, { useState } from 'react'

const ExampleHooks = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
            <p>Click  {count} veces</p>
            <button onClick={() => setCount(count+1)}>Add</button>
        </div>
    )
}
export default ExampleHooks

// class ExampleHooks extends Component {
//     state = {
//         count: 0
//     }
//     render() {
//         return (
//             <div>
//                 <p>Click {this.state.count} veces</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add</button>
//             </div>
//         )
//     }
// }
// export default ExampleHooks