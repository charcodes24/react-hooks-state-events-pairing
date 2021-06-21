import React, { useState } from "react";
import Comments from "./Comments";

function Buttons({ video, addThumbsUp, addThumbsDown, thumbsup, thumbsdown }) {
    const {comments} = video;
    const [hide, setHide] = useState(false);

    function toggleComments() {
        if (hide) {
            setHide(false)
        } else {
            setHide(true)
        }
    }

    

    return (
        <div>
            <button onClick={() => addThumbsUp()}>{thumbsup}👍</button>
            <button onClick={() => addThumbsDown()}>{thumbsdown}👎</button>
            <br/>
            <br/>
            <button onClick={() => toggleComments()}>{hide ? "Show Comments" : "Hide Comments"}</button>
            <div className="comments-container">
                <Comments comments={comments} hide={hide} />
            </div>
        </div>
    )
}

export default Buttons;