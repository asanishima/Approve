import React from 'react';

class Post extends React.Component {

    render() {
        return (
            <div className='post-container'>
                <div className='post-content'>
                    <p>{this.props.post}</p>
                    <p>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

export default Post;