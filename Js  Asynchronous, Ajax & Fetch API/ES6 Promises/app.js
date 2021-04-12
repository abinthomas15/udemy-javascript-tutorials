const posts = [
  {title: 'Post One', body: 'This is Post one'},  
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post,){
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = true;
      if(!error){
        resolve();
      } else {
        reject('ERROR : Something went wrong')
      }

      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'post three', body: 'This is post three'}).then(getPosts)
.catch(function(err) {
  console.log(err);
});