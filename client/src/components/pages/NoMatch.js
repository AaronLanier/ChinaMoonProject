import React from "react";
import "../Nomatch.css";

function NoMatch() {
  return (
    <div className="masterError">
    <div className="error" id="error">
      <h1 id="errorRow">404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </div>
    </div>
  );
}

export default NoMatch;
