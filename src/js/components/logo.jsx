import React from "react";

export const Logo = props =>
    <img src={`${document.URL.substr(0,document.URL.lastIndexOf('/'))}/media/images/247-logo-${props.colour}.png`} alt="247 logo" className={ props.logoClass } />