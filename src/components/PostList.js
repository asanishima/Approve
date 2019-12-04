import React from 'react';
import Post from './Post';

const PostList = props => {

    return (
        <div className='postlist-container'>
            <div className=''>
                {props.list.map( (item, index) => {
                    return <Post key={index} post={item.post} author={item.author} />
                } )}
            </div>
        </div>
    );
}

export default PostList;