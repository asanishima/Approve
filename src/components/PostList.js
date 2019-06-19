import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const postList = [
            {
                post: 'hogehogehogehoge',
                author: 'naoki'
            },
            {
                post: 'fugafugafugafuga',
                author: 'hogetarou'
            },
        ];
        return (
            <div className='postlist-container'>
                <div className=''>
                    {postList.map( (postItem) => {
                        return <Post post={postItem.post} author={postItem.author} />
                    } )}
                </div>
            </div>

        )
    }

}

export default PostList;