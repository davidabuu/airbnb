import { SearchOutlined } from "@material-ui/icons"
import React from "react"
import { SearchStyle } from "./style/SearchStyled"

const Search = () => {
    return (
        <SearchStyle>
            <div className="search">
                <div>
                    <h3>Location</h3>
                    <input placeholder="Where are you going?" />
                </div>
                <div>
                    <h3>Check In</h3>
                    <input placeholder="Add Date" />
                </div>
                <div>
                    <h3>Check Out</h3>
                    <input placeholder="Add Date" />
                </div>
                <div>
                    <h3>Guests</h3>
                    <input placeholder="Add guests" />
                </div>
                <div className="search-icon">
                    <SearchOutlined />
                </div>
            </div>
        </SearchStyle>
    )
}

export default Search
