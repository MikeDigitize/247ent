import React from "react";
import ReactDOM from "react-dom";
import VideoBanner from "./components/video-banner";
import DealHolder from "./components/deal-holder";

ReactDOM.render(<VideoBanner />, document.getElementById("header-banner"));
ReactDOM.render(<DealHolder />, document.getElementById("latest-deals"));