import React from 'react';

import './NewGoal.css';

const NewGoal = props => {

    const addCourseHandler = e => {
        e.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: ""
        }

        props.onAddGoal(newGoal);
    }

    return (
        <form className="" onSubmit={addCourseHandler}>
            <input type="text" />
            <input type="submit" value="Add Goal" />
        </form>
    )
}

export default NewGoal;