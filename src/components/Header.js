import React from "react";

function Header({ video }) {
    const {title, embedUrl, views, createdAt} = video
    
    return (
    <div>   
        <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
        />
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
    </div>
    )
}

export default Header;

  