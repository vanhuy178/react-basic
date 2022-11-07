import React from "react";
import './Home.scss'
import { Color } from "../HOC/Color";
class Home extends React.Component {
    render() {
        return (
            <div className="home">Home nè</div>
        )
    }
}
export default Color(Home);
