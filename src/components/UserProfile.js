import React, { Component } from "react";
import { connect } from "react-redux";
import { requestRobotDetail } from "../actions/actions";

class UserProfile extends Component {
    componentDidMount() {
        let id = this.props.match.params.user;        
        this.props.onRequestRobotDetail(id);
    }
    render(){
        const { isPending, data } = this.props.robot;
        return isPending ?
            <h2 className="tc">Loading...</h2> :
            <div className="tc">
                <h1>Profile</h1>
                <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5" style={{margin: '0 auto', width: '300px'}}>
                    <img src={`https://robohash.org/${data.id}`} width="200" height="auto" alt="Robot" />
                    <div>
                        <h2>{data.name}</h2>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                    </div>

                </div>
            </div>
    }
};

const mapStateToProps = (state) => {
    return {
        robot: state.requestRobotDetail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobotDetail: (id) => dispatch(requestRobotDetail(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);