import React from "react";
import withRouter from '../HOC/withRouter'
import axios from "axios";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.router.params && this.props.router.params.id) {
            const id = this.props.router.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            // console.log(res);
            this.setState(
                {
                    user: res && res.data && res.data.data ? res.data.data : {}
                }
            )
        }
    }
    handBackButton = () => {
        this.props.router.navigate(`/user`)
    }
    render() {
        const { user } = this.state
        const isEmptyObject = Object.keys(user).length === 0;
        const { id, first_name, last_name, avatar } = user;
        return (
            <>
                <div>
                    The id is: {this.props.router.params.id}
                </div>

                {isEmptyObject === false &&
                    <>
                        <div>User's name: {id}</div>
                        <div>User's email: {`${first_name} ${last_name}`}</div>
                        <div>
                            <img src={avatar} alt='Nhìn cc' />
                        </div>

                        <div>
                            <button
                                type='button'
                                onClick={() => this.handBackButton()}
                            >Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default withRouter(DetailUser);