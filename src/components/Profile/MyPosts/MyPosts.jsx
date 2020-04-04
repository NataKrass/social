import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p =>  
    <Post message={p.message} like={p.likesCount}/> )
    
    let newPostElement = React.createRef();

    let onAddPost = () => { 
        props.addPost();
    } 

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);  
    }

    return (
        <div className={s.posts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
        </div>
        <div className={s.post}>
           { postsElements }
           
        </div>
    </div>
    )     
}

export default MyPosts;