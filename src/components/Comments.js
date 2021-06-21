import React from "react";

function Comments({ comments }) {
    console.log(comments);

    function renderComments() {
        return comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                </div>
            )
        })
    }

    return (
        <div className="comments-container">
        {renderComments()}
        </div>
    )
}

export default Comments;


