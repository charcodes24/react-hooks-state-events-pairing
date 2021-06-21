import React, { useState } from "react";
import Header from "./Header";
import Buttons from "./Buttons";
import video from "../data/video.js";

function App() {
  const {upvotes, downvotes} = video;
  const [thumbsup, setThumbsUp] = useState(upvotes);
  const [thumbsdown, setThumbsDown] = useState(downvotes);

  function addThumbsUp() {
    let updatedLikes = thumbsup + 1;
    return setThumbsUp(updatedLikes);
  }

  function addThumbsDown() {
    let updatedLikes = thumbsdown + 1;
    return setThumbsDown(updatedLikes);
  }

  return (
    <div className="App">
      <Header video={video} />
      <Buttons 
        video={video} 
        addThumbsUp={addThumbsUp} 
        addThumbsDown={addThumbsDown} 
        thumbsup={thumbsup} 
        thumbsdown={thumbsdown}
      />
    </div>
  );
}

export default App;
