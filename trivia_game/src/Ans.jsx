import React from "react";

function Answer(props) {
    const answer = props.wans;
    answer.push(props.ans);
    // console.log(props.ans);
    const randAns = [];
    var j;
    var styles = {
        backgroundColor: props.isChecked ? "green" : "#FFFFFF" 
    }
    var k = 0

    React.useEffect(
        () => {
            console.log("test")
            if(props.type === "boolean") { 
            for (var a = [0, 1], i = a.length; i--; ) {
                var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
                randAns[j] = answer[random]
                j++
            } 
            console.log(randAns)
        }
        else {
            for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
                var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
                randAns[j] = answer[random]
                j++
            }
            console.log(randAns)
        }
        }
    ,[])
    if (props.type === "boolean") {
        j = 0;
        // for (var a = [0, 1], i = a.length; i--; ) {
        //     var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        //     randAns[j] = answer[random]
        //     j++
        // }
        return (
            <div className="answer-box">
                 {
                    randAns.map((ans) => (
                        <div className="answer" style={styles} onClick={props.ansHold}><div className="options">{ans.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                    ))
                }
            </div>
        )
}
    else {

        // k++
        // console.log(`rebulding  ${k}`)
        // j = 0;
        // for (var a = [0, 1, 2, 3], i = a.length; i--; ) {
        //     var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        //     randAns[j] = answer[random]
        //     j++
        // }
        return (
            <div className="answer-box">
                {
                    randAns.map((ans) => (
                        <div className="answer"  style={styles} onClick={props.ansHold}><div className="options">{ans.replace(/&#039;/g, "'").replace(/&quot;/g, '"')}</div></div>
                    ))
                }
            </div>
        )
    }
}

export default Answer