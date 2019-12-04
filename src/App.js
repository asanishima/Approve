import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList'
import './App.css';

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

const App = () => {
  return (

    <div className="App">
      <PostForm />
      <PostList list={postList}/>
    </div>
  );
}

export default App;
