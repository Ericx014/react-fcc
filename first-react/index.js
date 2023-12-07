import React from "react"
import ReactDOM from "react-dom"

const navBar = (
    <nav>
        <h1>Restaurant</h1>
        <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar,
    document.getElementById('root')
)