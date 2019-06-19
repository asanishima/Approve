import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddPost extends Component {
    render() {
        <div>
            <form 
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addPost(input.value))
                    input.value = ''
                }}
        >
                <input 

                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    }
}