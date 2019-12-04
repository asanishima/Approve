import React, {useState }  from 'react'

const PostForm = props => {

    const [content, setContent] = useState('');
    
    const handleChange = e => {
        setContent(e.target.value);
    };

    const handleSubmit = () => {
        alert('The post is submitted :' + content);
    };
     
    return(
        <div className='post-container'>
            <div className='postform'>
                 <form onSubmit={handleSubmit}> 
                    <textarea
                        placeholder='課題を書き込んでください！'
                            value={content}
                            onChange={handleChange}>
                    </textarea>
                    <button type='submit' name='submit'>投稿</button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;