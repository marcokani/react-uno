import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Exercises from '../pages/Exercises'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/404'
import ExampleHooks from '../components/ExampleHooks'

const App=()=>(
    <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={ExercisesContainer} />
                <Route exact path="/exercise/new" component={ExerciseNewContainer} />
                <Route exact path="/hooks" component={ExampleHooks}/>
                <Route  component={NotFound} />
            </Switch>
        </BrowserRouter>
)
// function App() {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path="/exercise" component={Exercises} />
//                 <Route exact path="/exercise/new" component={ExerciseNew} />
//                 <Route  component={NotFound} />
//             </Switch>
//         </BrowserRouter>
//     )
// }
export default App