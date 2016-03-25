import React, { Component } from "react";
import { debounce } from "../utils/dom-utils";

export default class VideoBanner extends Component {
    constructor() {
        super();
        this.state = {
            wrapperPadding : 0,
            display : "none"
        };
    }
    componentDidMount() {
        this.refs.videoBanner.addEventListener("loadedmetadata", () => {
            this.setWrapperPadding(this.refs.videoBanner.videoHeight / this.refs.videoBanner.videoWidth * 100);
        });
    }
    setWrapperPadding(pb) {
        this.setState({
            wrapperPadding : pb,
            display : "block"
        });
    }
    render() {
        return (
            <div className="banner-wrapper" style={{ paddingBottom : this.state.wrapperPadding + "%", display: this.state.display }}>
                <video id="video-banner" loop autoPlay ref="videoBanner">
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