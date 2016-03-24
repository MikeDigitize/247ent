import React, { Component } from "react";
import "video.js";

export default class VideoBanner extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="banner-wrapper">
                <video id="video-banner" className="video-js ambient" loop autoPlay>
                    <source src="../media/video/video-banner.mp4" type="video/mp4" />
                    <source src="../media/video/video-banner.webm" type="video/webm" />
                    <source src="../media/video/video-banner.ogv" type="video/ogg" />
                </video>
                <div className="hero-text">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
        )
    }

}