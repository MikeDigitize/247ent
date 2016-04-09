import React, { Component } from "react";
import { NavBar } from "./nav-bar";
import { Logo } from "./logo";
import { SignupForm } from "./email-signup";

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
            <div className="banner-wrapper" style={{ display: this.state.display }}>
                <video id="video-banner" loop autoPlay ref="videoBanner">
                    <source src={`${document.URL.substr(0,document.URL.lastIndexOf('/'))}/media/video/video-banner.mp4`} type="video/mp4" />
                    <source src={`${document.URL.substr(0,document.URL.lastIndexOf('/'))}/media/video/video-banner.webm`} type="video/webm" />
                    <source src={`${document.URL.substr(0,document.URL.lastIndexOf('/'))}/media/video/video-banner.ogv`} type="video/ogg" />
                </video>
                <div className="banner-nav-holder">
                    <NavBar />
                </div>
                <div className="banner-logo-holder">
                    <Logo colour="white" logoClass="banner-logo" />
                </div>
                <div className="banner-email-signup">
                    <SignupForm />
                </div>
                <div className="hero-text">
                    <h1>247 Enterprises</h1>
                    <h2>Exclusive bar supplies</h2>
                </div>
            </div>
        )
    }

}