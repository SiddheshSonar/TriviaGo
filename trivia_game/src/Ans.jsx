import React from "react";

function Answer(props) {
    // console.log(props.wans)
    const answer = props.wans;
    answer.push(props.ans);
    console.log(answer)
    if (props.type === "boolean") {
        return (
            <div className="answer-box">
                <div className="answer"><div className="options">{props.ans}</div></div>
                <div className="answer"><div className="options">{props.wans[0]}</div></div>
            </div>
        )
}
    else {
        return (
            <div className="answer-box">
                <div className="answer"><div className="options">{props.ans.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{props.wans[0].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{props.wans[1].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{props.wans[2].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
            </div>
        )
    }
}

export default Answer