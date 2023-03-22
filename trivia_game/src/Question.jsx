import React from "react";
import Answer from "./Ans";

function Question(props) {
    return (
        <div>
            <div className="question">{props.quest}</div>
        </div>
    )
}

export default Question