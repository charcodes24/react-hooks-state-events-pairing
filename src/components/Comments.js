import React from "react";

function Comments({ comments, hide }) {
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
        <div style={hide ? {'display': 'none'} : {'display': 'block'} }className="comments-container">
        <h2>{comments.length} Comments</h2>
        {renderComments()}
        </div>
    )
}

export default Comments;


