import React from 'react';
import * as axios from 'axios';
import Users from './Users'
import {connect} from 'react-redux';
import preloader from '../../assets/img/loader.gif';
import {setUsers, unfollow, follow, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../redux/users-reducer';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });  
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toogleIsFetching(false);
            this.props.toogleIsFetching(false);
            this.props.setUsers(response.data.items);
            
        });  
        
    }
    render() {
        return <> 
        { this.props.isFetching ? <img src={preloader}/> : null }
        <Users totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}/>
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching
    }) (UsersAPIComponent);
