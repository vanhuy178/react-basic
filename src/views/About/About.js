import React from "react";
import './About.scss'
import { connect } from 'react-redux'
class About extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="about">
                About nè
            </div>
        )
    }
}

// Create a connect between react and redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
export default connect(mapStateToProps)(About);
