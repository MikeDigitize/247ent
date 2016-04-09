import React from "react";
import { Logo } from "./logo";

export const Deal = props =>
    <div className="col-lg-4 deal">
        <div className="row">
            <div className="col-sm-4">
                <Logo colour="red" logoClass="deal-logo" />
                <img src={ props.img } alt={ props.desc } className="deal-img" />
            </div>
            <div className="col-sm-8">
                <h3>{ props.title }</h3>
                <p className="deal-date">{ props.date }</p>
                <p className="deal-desc">{ props.desc }</p>
                <p className="deal-price-info">&pound;<span className="deal-price">{ props.price }</span></p>
                <p className="deal-was">RRP &pound;{ props.was }!</p>
                <p className="deal-valid-from-info">Valid only from</p>
                <p className="deal-valid-from">{ props.valid }!</p>
                <p className="deal-terms">{ props.terms }</p>
            </div>
        </div>
    </div>;