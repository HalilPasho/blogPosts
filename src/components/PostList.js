import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../action/index";
import Header from "./Header";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  showList() {
    const { posts } = this.props;
    return posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <Header userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  //test 
  
  render() { 
    console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.showList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPost: fetchPost }
)(PostList);
