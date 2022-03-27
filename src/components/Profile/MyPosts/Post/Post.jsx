import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src={"https://cinemachords.com/wp-content/uploads/2013/08/avatar-navi.jpg"}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;