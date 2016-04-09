import React, { Component } from "react";
import { Deal } from "./deals";

export default class DealHolder extends Component {
    constructor(props) {
        super();
        this.state = {
            products : [{
                title : "Two day special!",
                desc : "Grey Goose 1L Vodka",
                price : "12.99",
                was : "34.99",
                valid : "10th - 12th April, 2016",
                terms : "When you spend £100 or more on other 247 products. Max 5 per customer. Not to be used in conjunction with any other offer.",
                img : "media/images/deals/grey-goose.png"
            },
            {
                title : "Two day special!",
                desc : "Grey Goose 1L Vodka",
                price : "12.99",
                was : "34.99",
                valid : "10th - 12th April, 2016",
                terms : "When you spend £100 or more on other 247 products. Max 5 per customer. Not to be used in conjunction with any other offer.",
                img : "media/images/deals/grey-goose.png"
            },
            {
                title : "Two day special!",
                desc : "Grey Goose 1L Vodka",
                price : "12.99",
                was : "34.99",
                valid : "10th - 12th April, 2016",
                terms : "When you spend £100 or more on other 247 products. Max 5 per customer. Not to be used in conjunction with any other offer.",
                img : "media/images/deals/grey-goose.png"
            }]
        }
    }
    createDeals() {
        return this.state.products.map((product, i) =>
            <Deal
                key={ product.title + i }
                title={ product.title }
                desc={ product.desc }
                price={ product.price }
                was={ product.was }
                valid={ product.valid }
                terms={ product.terms }
                img={ product.img }
            />
        );
    }
    render() {
        return (
            <div className="col-sm-12 deal-holder">
                <h2>Latest Deals</h2>
                { this.createDeals() }
            </div>
        );
    }
}