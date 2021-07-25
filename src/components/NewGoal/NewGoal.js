import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');

    const addCourseHandler = e => {
        e.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: ""
        }

        setEnteredText('');

        props.onAddGoal(newGoal);
    }

    return (
        <form className="" onSubmit={addCourseHandler}>
            <input type="text" value={enteredText} />
            <input type="submit" value="Add Goal" />
        </form>
    )
}

export default NewGoal;