import { http } from './http' ;
import { ui } from './ui'
 
// Get Posts on Dom load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click',submitPost);

// Listen for Delete Post
document.querySelector('#posts').addEventListener('click', deletePost)

// Listen for edit State
document.querySelector('#posts').addEventListener('click',enableEdit);

// Listen for cancel state
document.querySelector('.card-form').addEventListener('click',cancelEdit);

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
   const id = document.querySelector('#id').value;

   const data = {
      title : title,
      body : body
   }

   // Validate the input
   if(title === '' || body === '') {
      ui.showAlert('Please fill in all fields', 'alert alert-danger')
   } else {
      // Check for id
      if(id === '') {
         // Create Post
         http.post('http://localhost:3000/Post', data)
         .then(data => {
         ui.showAlert('Post added','alert alert-success');
         ui.clearFields();
         getPosts();
         })
         .catch((err) => console.log(err));
      } else {
         // Update the post
         http.put(`http://localhost:3000/Post/${id}`, data)
         .then(data => {
         ui.showAlert('Post Updated','alert alert-success');
         ui.changeFormState('add');
         getPosts();
         })
         .catch((err) => console.log(err));
      }
   }
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

// Enable Edit state
function enableEdit (e) {
   if(e.target.parentElement.classList.contains('edit')) {
      const id = e.target.parentElement.dataset.id;
      const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
      const body = e.target.parentElement.previousElementSibling.textContent;

      const data = {
         id,
         title,
         body
      }

      // Fill form with the current post
      ui.fillForm(data);
   }

   e.preventDefault();
}

// Cancel Edit State
function cancelEdit(e) {
   if(e.target.classList.contains('post-cancel')) {
      ui.changeFormState('add')
   }
}