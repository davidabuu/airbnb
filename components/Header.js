import React, { useState } from "react"
import { Menu } from "@material-ui/icons"
import { HeadingStyle } from "./style/HeaderStyle"

const Header = () => {
    const [show, hide] = useState(false)
    const showProfile = () => {
        hide(!show)
    }
    return (
        <HeadingStyle>
            <div className="bnb">
                <ul>
                    <li>BNB.COM</li>
                    <li>Places To Stay</li>
                    <li>Experiences</li>
                    <li>Online Experiences</li>
                </ul>
            </div>
            <div className="host-div">
                <p>Become a Host</p>
                <div className="profile" onClick={showProfile}>
                    <Menu />
                </div>
                <div className={`${show ? "profile-info" : "hide"}`}>
                    <ul>
                        <li>Login</li>
                        <li>Login</li>
                        <li>Login</li>
                        <li>Login</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </HeadingStyle>
    )
}

export default Header
