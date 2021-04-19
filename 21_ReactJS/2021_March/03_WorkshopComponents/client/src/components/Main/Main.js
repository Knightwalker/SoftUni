import Post from "../Post";
import "./Main.css";

const Main = (props) => {
  const posts = props.posts;
  console.log(posts);
  return (
    <div className="main-container">
      <h1>Soooome Heading</h1>
      <div className="posts">
        {posts.map((post) =>
          <Post key={post.id} content={post.content} author={post.author}></Post>
        )}
      </div>
    </div>
  );
}

export default Main;