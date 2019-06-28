import React, { Component, Fragment } from 'react'
import ExerciseList from '../components/ExerciseList';
import Welcome from '../components/Welcome';
import Button from '../components/Button';
const Exercises = ({ data }) => (
    <Fragment>
        <Welcome
            username="Marco Antonio"
        />
        <ExerciseList
            exercises={data} />
        <Button />
    </Fragment>
)

export default Exercises