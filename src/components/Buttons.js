import React from "react";
import Comments from "./Comments";

function Buttons({ video, addThumbsUp, addThumbsDown, thumbsup, thumbsdown, hide, setHide}) {
    const {comments} = video;

    function toggleComments() {
        
    }

    

    return (
        <div>
            <button onClick={() => addThumbsUp()}>{thumbsup}👍</button>
            <button onClick={() => addThumbsDown()}>{thumbsdown}👎</button>
            <br/>
            <br/>
            <button onClick={() => toggleComments()}>{hide ? "Hide Comments" : "Show Comments"}</button>
            <div className="comments-container">
                <h2>{comments.length} Comments</h2>
                <Comments comments={comments} />
            </div>
        </div>
    )
}

export default Buttons;