import React from 'react'

class PostForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {content: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(e) {
        this.setState({content: e.target.value});
    }

    handleSubmit(e) {
        alert('The post is submitted :' + this.state.content);
    }

    render() {
        return(
            <div className='postform'>
                <form onSubmit={this.handleSubmit}> 
                    <textarea
                        placeholder='課題を書き込んでください！'
                        value={this.state.content}
                        onChange={this.handleChange}>
                    </textarea>
                    <button type='submit' name='submit'>投稿</button>
                </form>
            </div>
        )
    }
}

export default PostForm;