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
                <div className="banner-nav-holder">
                    <nav className="navbar navbar-light">
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="banner-logo-holder">
                    <img src="../media/images/247-logo.png" alt="247 logo" className="banner-logo" width="100"/>
                </div>
                <div className="hero-text">
                    <h1>247 Enterprises</h1>
                    <h2>Exclusive bar supplies</h2>
                </div>
            </div>
        )
    }

}