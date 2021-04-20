import { http } from './http' ;
import { ui } from './ui'
 
// Get Posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click',submitPost);

// Listen for Delete Post
document.querySelector('#posts').addEventListener('click', deletePost)

// Get Posts
function getPosts () {
   http.get('http://localhost:3000/Post')
      .then(data => ui.showPosts(data))
      .catch(err => console.log(err));
}

// Submit Posts
function submitPost() {
   const title = document.querySelector('#title').value;
   const body = document.querySelector('#body').value;
   
   const data = {
      title : title,
      body : body
   }
   // Create Post 
   http.post('http://localhost:3000/Post', data)
      .then(data => {
         ui.showAlert('Post added','alert alert-success');
         ui.clearFields();
         getPosts();
      })
      .catch((err) => console.log(err));
}

// Delete Post
function deletePost(e) {
   if(e.target.parentElement.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.id;
      if(confirm('Are you sure?')) {
         http
            .delete(`http://localhost:3000/Post/${id}`)
            .then(data => {
               ui.showAlert('Post removed', 'alert alert-success');
               getPosts();
            })
            .catch(err => console.log('error is logged', err));
      }
   }  
   e.preventDefault();
}