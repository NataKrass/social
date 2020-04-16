import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/def_user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });  
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
           
        });  
        
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        console.log(this.props.totalUsersCount)
        let pages = [];
        for (let i=1; i < 20; i++){
            pages.push(i);
           
        }
        return <div>
            <div>
                {pages.map( p => {
                    return <span onClick={(e) => {this.onPageChanged(p)}}
                     className={this.props.currentPage === p && s.selected}>{p}</span>
                })}
              
            </div>
           {
               this.props.users.map( u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed 
                           ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> 
                           : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                           
                       </div>
                   </span>
                   <span>
                      <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>   
                      <span>
                          {/* <div>{u.location.city}</div>
                          <div>{u.location.country}</div> */}
                      </span>
                   </span>
               </div>)
           }
    
        </div>
    }
}

export default Users;