
var ulElement = document.createElement('ul');
ulElement.style.listStyle = "none";

// Array of image URLs and captions
var images = [
  {
    imageUrl: 'https://1.bp.blogspot.com/-NsTT5WA5lCs/X6-jNE-8ZeI/AAAAAAAAU-0/uAYiaHP2DJEnwnn-pFIPDkhNZ1BQS5dQQCLcBGAsYHQ/s2048/%25D9%2581%25D9%2584%25D8%25B3%25D8%25B7%25D9%258A%25D9%2586.png',
    caption: 'MY'
  },
  {
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.TnalbNc46_Vr8TT_dq0zTwHaFj&pid=Api&P=0&h=220',
    caption: 'Image 2'
  },
  {
    imageUrl: 'https://i.pinimg.com/474x/63/f9/d5/63f9d5fd5f34c8544a31c22c3e909cec.jpg',
    caption: 'Image 3'
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/86/94/43/86944381229a433ed3bf078af4543c82.jpg',
    caption: 'Image 3'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/47/1a/a7/471aa768bb688e9e94244e1907690572.jpg',
    caption: 'Image 3'
  },
  {
    imageUrl: 'https://i.pinimg.com/1200x/33/a1/1e/33a11ec7801981f093f10698e251f954.jpg',
    caption: 'Image 3'
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabji7yrrxH7btVp54HaWv4Xcth_VS8Dlh3w&usqp=CAU',
    caption: 'Image 3'
  },
  {
    imageUrl: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863',
    caption: 'Image 3'
  }, 
  

  
];

// Loop through the images array and create <li> elements with <img> and <h6> elements
images.forEach(function(image) {
  // Create the <li> element
  var liElement = document.createElement('li');
  
  // Create the <img> element
  var imgElement = document.createElement('img');
  
  // Set the source (URL) of the image
  imgElement.src = image.imageUrl;
  imgElement.style.width = "65px"
  imgElement.style.height = "65px"
  imgElement.style.borderRadius = "50%"
  imgElement.style.border = "2px solid  "
  imgElement.style.borderColor = "purple red orange yellow "
  imgElement.style.padding = "2px"
 
  
  
  // Create the <h6> element
  var h6Element = document.createElement('h6');
  
  // Set the caption text
  h6Element.textContent = image.caption;
  h6Element.style.textAlign = "center"
  h6Element.style.position = "relative"
  h6Element.style.left = "5px"
  
  // Append the <img> and <h6> elements to the <li> element
  liElement.appendChild(imgElement);
  liElement.appendChild(h6Element);
  
  // Append the <li> element to the <ul> element
  ulElement.appendChild(liElement);
});

// Append the <ul> element to the document body or any other element
nav.appendChild(ulElement);


const att = document.createAttribute("class");
att.value = "list";
ulElement.setAttributeNode(att);








var postContainer = document.getElementById("postContainer");

function createPost() {
  // Create post elements
  var post = document.createElement("div");
  post.className = "post";


  var title = document.createElement("img");
  title.src = "https://1.bp.blogspot.com/-NsTT5WA5lCs/X6-jNE-8ZeI/AAAAAAAAU-0/uAYiaHP2DJEnwnn-pFIPDkhNZ1BQS5dQQCLcBGAsYHQ/s2048/%25D9%2581%25D9%2584%25D8%25B3%25D8%25B7%25D9%258A%25D9%2586.png";
  title.style.width = "100%"
  post.appendChild(title);

  var content = document.createElement("p");
  content.textContent = "This is the content of the new post.";
  post.appendChild(content);

  postContainer.appendChild(post);
}





// Array of post data
var postData = [
  {
    profileImage: 'https://cdn.al-ain.com/lg/images/2022/10/01/138-110853-edits-ahly-logo-change-photo-2.jpeg',
    username: 'AlAhly',
    postImage: 'https://img.kooora.com/?i=afp%2F20230611%2F20230611-afp_33j67fy_afp.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },

  {
    profileImage: 'data:image/png;base64,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',
    username: 'Zara',
    postImage: 'https://static.zara.net/photos///2023/I/0/2/p/4302/520/711/2/w/824/4302520711_2_1_1.jpg?ts=1687331082395',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },

  {
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGhHVThJIYlljz24kjnn80hPSyDCq_uVyY5yvxjPt4mN2mD7HsxjgMbT1BvJvdfR_PIQ&usqp=CAU',
    username: 'amrkhaled',
    postImage: 'https://pbs.twimg.com/media/Eg_gWohX0AAwOf9.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },


  {
    profileImage: 'https://www.cairo24.com/UploadCache/libfiles/115/2/400x225o/614.jpg',
    username: 'palestiniaan_',
    postImage: 'https://i.pinimg.com/originals/24/71/e0/2471e0989955e009e4958cee1eb4954b.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },


  {
    profileImage: 'https://ums.com.eg/wp-content/uploads/2023/04/news-Kora-Plus.jpg',
    username: 'koraplus',
    postImage: 'https://extrakora.com/wp-content/uploads/2023/11/ahmed-fattouh-al-ahly-1024x538.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },

  {
    profileImage: 'https://yt3.googleusercontent.com/LViWsQpkUN7p22xcW5kPzWai-HzWlaszpsEP3jQjnIyXi2G_gaZz7zosE1_vNOPrrdvzKYEryA=s900-c-k-c0x00ffffff-no-rj',
    username: 'aljazeera',
    postImage: 'https://pbs.twimg.com/media/F_V4HqGWEAASjbX.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },


  {
    profileImage: 'https://www.samueles.ae/wp-content/uploads/2021/11/talabat-logo.svg',
    username: 'talabat_egypt',
    postImage: 'https://cdn.couponava.com/2021/03/%D8%AE%D8%B5%D9%85-%D8%B7%D9%84%D8%A8%D8%A7%D8%AA.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },
  {
    profileImage: 'https://modo3.com/thumbs/fit630x300/4370/1441198794/%D9%86%D8%B5%D8%A7%D8%A6%D8%AD_%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg',
    username: 'JohnDoe',
    postImage: 'https://modo3.com/thumbs/fit630x300/4370/1441198794/%D9%86%D8%B5%D8%A7%D8%A6%D8%AD_%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.jpg',
    fontaswome : "fas fa-heart",
    likes: 10,
    caption: 'This is an amazing photo!',
    comments: [
      { username: 'JaneSmith', comment: 'Beautiful!' },
      { username: 'MarkJohnson', comment: 'Love it!' }
    ],
    postTime: '2 hours ago'
  },
  // Add more post objects here...
];

// Function to create a single post element
function createPostElement(post) {
  // Create the post element
  var postElement = document.createElement('div');
  postElement.classList.add('post-container');

  // Create the post header element
  var postHeaderElement = document.createElement('div');
  postHeaderElement.classList.add('post-header');

  // Create the profile image element
  var profileImageElement = document.createElement('img');
  profileImageElement.classList.add('profile-image');
  profileImageElement.src = post.profileImage;
  profileImageElement.alt = 'Profile Image';
  postHeaderElement.appendChild(profileImageElement);

  // Create the username element
  var usernameElement = document.createElement('span');
  usernameElement.classList.add('username');
  usernameElement.textContent = post.username;
  postHeaderElement.appendChild(usernameElement);

  // Append the post header element to the post element
  postElement.appendChild(postHeaderElement);

  // Create the post image element
  var postImageElement = document.createElement('img');
  postImageElement.classList.add('post-image');
  postImageElement.src = post.postImage;
  postImageElement.alt = 'Post Image';
  postElement.appendChild(postImageElement);

  // Create the post footer element
   var postFooterElement = document.createElement('div');
   postFooterElement.classList.add('post-footer');

  
  // Create the likes element
  var likesElement = document.createElement('div');
  likesElement.classList.add('likes');
  likesElement.textContent = post.likes + ' likes';
  postFooterElement.appendChild(likesElement);

  // Create the caption element
  var captionElement = document.createElement('div');
  captionElement.classList.add('caption');

  // Create the username element within the caption element
  var captionUsernameElement = document.createElement('span');
  captionUsernameElement.classList.add('username');
  captionUsernameElement.textContent = post.username;
  captionElement.appendChild(captionUsernameElement);

  // Create the caption text element within the caption element
  var captionTextElement = document.createElement('span');
  captionTextElement.classList.add('caption-text');
  captionTextElement.textContent = post.caption;
  captionElement.appendChild(captionTextElement);

  // Append the caption element to the post footer element
  postFooterElement.appendChild(captionElement);

  // Create the comments element
  var commentsElement = document.createElement('div');
  commentsElement.classList.add('comments');

  // Loop through the comments data
  post.comments.forEach(function(comment) {
    // Create a single comment element
    var commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // Create the username element within the comment element
    var commentUsernameElement = document.createElement('span');
    commentUsernameElement.classList.add('username');
    commentUsernameElement.textContent = comment.username;
    commentElement.appendChild(commentUsernameElement);

    // Create the comment text element within the comment element
    var commentTextElement = document.createElement('span');
    commentTextElement.classList.add('comment-text');
    commentTextElement.textContent = comment.comment;
    commentElement.appendChild(commentTextElement);

    // Append the comment element to the comments element
    commentsElement.appendChild(commentElement);
  });

  // Append the comments element to the post footer element
  postFooterElement.appendChild(commentsElement);

  // Create the post time element
  var postTimeElement = document.createElement('div');
  postTimeElement.classList.add('post-time');
  postTimeElement.textContent = post.postTime;
  postFooterElement.appendChild(postTimeElement);

  // Append the post footer element to the post element
  postElement.appendChild(postFooterElement);

  // Return the created post element
  return postElement;
}

// Get the post container element
var postContainer = document.getElementById('postContainer');

// Loop through the post data and create post elements
postData.forEach(function(post) {
  var postElement = createPostElement(post);
  postContainer.appendChild(postElement);
});


















































document.querySelector('li').addEventListener('click', function() {
  console.log('Button clicked!');
 let story_container = document.querySelector(".story-container");
 story_container.style.display="flex"
  // Add your custom code or function calls here
document.getElementById("container").style.display = "none"




  


const storiesData = [
  {
    image: 'phot.jpg',
    duration: 5000 // 5 seconds
  },
  {
    image: 'phot2.jpg',
    duration: 5000 // 3 seconds
  }
 
];

const storyImage = document.getElementById('story-image');
const storyProgress = document.getElementById('story-progress');

let currentStoryIndex = 0;

function showNextStory() {
  if (currentStoryIndex >= storiesData.length) {
    // All stories finished
    return;
  }

  const currentStory = storiesData[currentStoryIndex];

  storyImage.src = currentStory.image;
  storyProgress.classList.add('active');
  setTimeout(() => {
    storyProgress.classList.remove('active');
    currentStoryIndex++;
    showNextStory();
  }, currentStory.duration);
}

showNextStory();


});









document.querySelector('.fa-xmark').addEventListener('click' , function(){
  console.log('Button clicked!');
  let story_container = document.querySelector(".story-container");
 story_container.style.display="none"
 document.getElementById("container").style.display = "flex"
})
















function displayimge(event){

  
  let files = event.target.files
  let info = document.querySelector(".info");  
  info.innerHTML += ""

  for( let i = 0; i < files.length; i++){
    let src = URL.createObjectURL(files[i])
    info.innerHTML += `<div class = 'mid'>
                         <div id='postContainer'>
                           <div class='post-header'>
                             <img src = 'plastien.png' class = 'profile-image'>
                             <span class='username'>hythamhassan0</span>
                           </div>
                             <img src = '${src}' class = 'post-image'>
                            <div class = 'post-footer'>
                              <div class = 'likes'>0 likes</div>
                              <div class='post-time'> 1 second </div>
                            </div>
                            </div>
                         </div>`  
  }
  

}



function displayimge(event){


  let files = event.target.files
  let info = document.querySelector(".info")
  info.innerHTML += ""
  

  for( let i = 0; i < files.length; i++){
    let src = URL.createObjectURL(files[i])
    info.innerHTML += `<div class = 'mid'>
                         <div id='postContainer'>
                           <div class='post-header'>
                             <img src = 'plastien.png' class = 'profile-image'>
                             <span class='username'>hythamhassan0</span>
                           </div>
                             <img src = '${src}' class = 'post-image' style='width:500px'>
                            <div class = 'post-footer'>
                              <div class = 'likes'>0 likes</div>
                              <div class='post-time'> 1 second </div>
                            </div>
                            </div>
                         </div>`  
                         
  }

  
}





let create = document.querySelector(".create");


create.addEventListener('click',function(){
  document.getElementById("moon").style.display = 'block'
}   
)

let file = document.getElementById("file");

file.addEventListener('click', function(){
  document.getElementById("moon").style.display = 'none'
})





let create_2 = document.querySelector(".create_2");


create_2.addEventListener('click',function(){
  document.getElementById("moon").style.display = 'block'
}   
)



file.addEventListener('click', function(){
  document.getElementById("moon").style.display = 'none'
})































































