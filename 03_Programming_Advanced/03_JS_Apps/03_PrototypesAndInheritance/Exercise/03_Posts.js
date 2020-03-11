function result() {

  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      let res = "";
      res += `Post: ${this.title}`;
      res += `\nContent: ${this.content}`;
      return res;
    }

  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let res = super.toString();
      res += `\nRating: ${this.likes - this.dislikes}`;
      if (this.comments.length > 0) {
        res += "\nComments:";
        for (let i = 0; i < this.comments.length; i++) {
          res += "\n * " + this.comments[i];
        }
      }
      return res;
    }
    
  }

  class	BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      let res = super.toString();
      res += `\nViews: ${this.views}`;
      return res;
    }

  }

  //let post = new Post("Post", "Content");

  //console.log(post.toString());

  // Post: Post
  // Content: Content

  // let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

  // scm.addComment("Good post");
  // scm.addComment("Very good post");
  // scm.addComment("Wow!");

  // console.log(scm.toString());

  // Post: TestTitle
  // Content: TestContent
  // Rating: -5
  // Comments:
  //  * Good post
  //  * Very good post
  //  * Wow!

  return {
    Post: Post,
    SocialMediaPost: SocialMediaPost,
    BlogPost: BlogPost
  }

}