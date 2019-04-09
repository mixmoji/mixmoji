import React, { Component } from "react";
import "./App.css";
import drumSound from "./audio/drum.mp3";
import drumEmoji from "./images/drum.png";
import guitarSound from "./audio/guitar.mp3";
import guitarEmoji from "./images/guitar.png";

class App extends Component {
  onEmojiMouseEnter = emoji => {
    document.getElementById(`sound-${emoji}`).play();
  };

  onEmojiMouseLeave = emoji => {
    document.getElementById(`sound-${emoji}`).pause();
  };

  render() {
    return (
      <div className="App">
        <div>
          <img
            src={drumEmoji}
            className="App-logo"
            alt="drum"
            onMouseEnter={() => this.onEmojiMouseEnter("drum")}
            onMouseLeave={() => this.onEmojiMouseLeave("drum")}
          />

          <audio id="sound-drum" src={drumSound} />
        </div>

        <div>
          <img
            src={guitarEmoji}
            className="App-logo"
            alt="guitar"
            onMouseEnter={() => this.onEmojiMouseEnter("guitar")}
            onMouseLeave={() => this.onEmojiMouseLeave("guitar")}
          />

          <audio id="sound-guitar" src={guitarSound} />
        </div>
      </div>
    );
  }
}

export default App;
