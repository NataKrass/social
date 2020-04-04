import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={s.item}>
            <img src='https://thumbs.dreamstime.com/z/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B5-%D0%B8%D0%BC%D1%8F-ava-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B8%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D0%BE%D0%B5-%D0%BE%D1%84%D0%BE%D1%80%D0%BC-%D0%B5%D0%BD%D0%B8%D0%B5-vec-88473894.jpg'></img>
            { props.message }
            <div>
                <span>
                 like { props.like }  
                </span>
            </div>
        </div>
        
    )
}

export default Post;