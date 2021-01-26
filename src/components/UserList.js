import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions/actions';
import SearchBox from './SearchBox';
import CardList from './CardList';


class User extends Component {
    constructor() {
        super()
        this.state = {
            rotots: []
        }
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ?
            <h1 className="tc">Loading...</h1> :
            <div className="tc">
                <h1>{'Robot Friends'.toUpperCase()}</h1>
                <SearchBox searchChange={onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
    };

}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);