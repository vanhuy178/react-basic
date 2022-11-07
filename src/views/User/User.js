import React from "react";
import axios from "axios";
import './User.scss'
import withRouter from "../HOC/withRouter";


class User extends React.Component {
    state = {
        listUser: []
    }
    async componentDidMount() {
        const res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState(
            { listUser: res && res.data && res.data.data ? res.data.data : [] }
        )
    }
    handleViewDetailUser = (user) => {
        this.props.router.navigate(`/user/${user.id}`);

    }
    render() {
        const { listUser } = this.state
        // console.log(listUser);
        return (
            <div className="list-user-container">
                {
                    listUser.map((listUseritem, index) => {
                        const { id, first_name, last_name, email } = listUseritem;
                        return (
                            <table key={index} className="styled-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className='active-row' onClick={() => this.handleViewDetailUser(listUseritem)}>
                                        <td >{id}</td>
                                        <td>{`${first_name} ${last_name}`}</td>
                                        <td>{email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(User) 