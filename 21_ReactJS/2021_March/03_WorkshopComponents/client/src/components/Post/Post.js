import "./Post.css";

const Post = (props) => {
  return (
    <div className="post-container">
      <img src="/blue-origami-bird.png" alt="bird" />
      <p className="post-description">{props.content}</p>
      <div>
        <span>
          <small>Author: </small> 
          {props.author}
        </span>
      </div>
    </div>
  );
}

export default Post;