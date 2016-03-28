import React from "react";

export const SignupForm = props => <form className="form-inline">
    <div className="form-group">
        <input type="email" className="form-control" id="signup-email" placeholder="Your email address" />
    </div>
    <button type="submit" className="btn signup-btn">Sign up</button>
    <p className="email-subtitle">Receive our exclusive daily offers in your inbox</p>
</form>;