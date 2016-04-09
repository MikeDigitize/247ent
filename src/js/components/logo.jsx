import React from "react";
import { getAbsoluteUrl } from "../utils/dom-utils";

export const Logo = props =>
    <img src={ getAbsoluteUrl(`media/images/247-logo-${props.colour}.png`)} alt="247 logo" className={ props.logoClass } />