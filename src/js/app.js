var vjs = require("video.js");
import React from "react";
import ReactDOM from "react-dom";
import VideoBanner from "./components/video-banner";

ReactDOM.render(<VideoBanner />, document.getElementById("test"));

console.log("hey!", vjs);