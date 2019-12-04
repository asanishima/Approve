import React from 'react';

const Post = props =>  {

        return (
            <div className='post-container'>
                <div className='post-content'>
                    <p className='post'>{props.post}</p>
                    <p className='author'>{props.author}</p>
                </div>
            </div>
        );
}

export default Post;