let btnLoadPostsEl = document.getElementById("btnLoadPosts");
let btnViewPost = document.getElementById("btnViewPost");
let postsEl = document.getElementById("posts");
let postCommentsEl = document.getElementById("post-comments");

btnLoadPostsEl.addEventListener("click", function(){
    fetch("https://blog-apps-c12bf.firebaseio.com/posts/.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let fragment = document.createDocumentFragment();
        for (const key in data) {
            const item = data[key];

            let optionEl = document.createElement("option");
            optionEl.value = key;
            optionEl.textContent = item.title;
            fragment.appendChild(optionEl);
        }
        postsEl.innerHTML = "";
        postsEl.appendChild(fragment)
    });
});

btnViewPost.addEventListener("click", function(){
    let postTitleEl = document.getElementById("post-title");
    let postBodyEl = document.getElementById("post-body");
    let dataArr = [];

    let postId = postsEl.value;
    fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}/.json`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        dataArr.push(data);
    });

    fetch("https://blog-apps-c12bf.firebaseio.com/comments/.json")
    .then(response => {
        return response.json();
    })
    .then(data => {

        postTitleEl.textContent = dataArr[0].title;
        postBodyEl.textContent = dataArr[0].body;
        let fragment = document.createDocumentFragment();

        for (let key in data) {
            let item = data[key];
            let liEl = document.createElement("li");

            if (item.postId == dataArr[0].id) {
               liEl.textContent = item.text; 
               fragment.appendChild(liEl);
            }
        }
   
        postCommentsEl.innerHTML = "";
        postCommentsEl.appendChild(fragment);

    });

});