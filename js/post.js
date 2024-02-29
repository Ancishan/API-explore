function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data)) 
}
// >>>----------<<<<<< here in 4 line displayposts and 7 line displayposts

/*
           1....get the container elements where you want to add the new elements
           2....create child element
           3....set innerText or innerHtml
           4....appendchild
*/

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');  // >>>>
        postDiv.innerHTML = `
        <h4> User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>  
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();

