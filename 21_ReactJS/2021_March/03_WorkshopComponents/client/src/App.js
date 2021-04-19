import React from "react";

import * as postService from "./services/postService";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    postService.getAll()
      .then((posts) => {
        this.setState({posts: posts})
      });
  }

  onMenuItemClick(id) {
    this.setState({selectedPost: id});
  }
  
  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find(x => x.id === this.state.selectedPost)]
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />
          <Main posts={this.getPosts()} />
        </div>
      </div>
    );
  }
}

export default App;
