import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');

    const addCourseHandler = e => {
        e.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }

        setEnteredText('');

        props.onAddGoal(newGoal);
    }

    const textChangeHandler = e => {
        setEnteredText(e.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addCourseHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <input type="submit" value="Add Goal" />
        </form>
    )
}

export default NewGoal;