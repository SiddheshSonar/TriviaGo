import React from "react";

function Answer(props) {
    const answer = props.wans;
    answer.push(props.ans);
    console.log(props.ans);
    const randAns = [];
    var j;
    if (props.type === "boolean") {
        j = 0;
        for (var a = [0, 1], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            randAns[j] = answer[random]
            j++
        }
        return (
            <div className="answer-box">
                <div className="answer"><div className="options">{randAns[0]}</div></div>
                <div className="answer"><div className="options">{randAns[1]}</div></div>
            </div>
        )
}
    else {
        j = 0;
        for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
            var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
            randAns[j] = answer[random]
            j++
        }
        return (
            <div className="answer-box">
                <div className="answer"><div className="options">{randAns[0].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{randAns[1].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{randAns[2].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                <div className="answer"><div className="options">{randAns[3].replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
            </div>
        )
    }
}

export default Answer