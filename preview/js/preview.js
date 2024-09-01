// Snackbar Message
const showSnackbarMsg = () => {
    const statusMsg = document.getElementById('snackbar-msg')
    if (statusMsg) {
        setTimeout(() => {
            statusMsg.classList.add('show');
            setTimeout(() => {
                statusMsg.classList.remove('show');
                setTimeout(() => {
                    statusMsg.style.display = 'none';;
                }, 400);
            }, 6000);
        }, 100);
    }
}

// Edit Owner Profile - Set default profile URL
const setDefaultProfile = () => {
    const defaultProfile = 'https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg'
    document.getElementById('profile-update-url').value = defaultProfile;
}
const defaultProfBtn = document.getElementById('setdefault-profile-btn')  
if (defaultProfBtn) defaultProfBtn.addEventListener('click',setDefaultProfile);

// Edit Post - Auto resize of text area
function autoResize(textarea) {
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set height to scrollHeight
}
const textarea = document.querySelector('.post-pop-up textarea[name="content"]');
if (textarea) textarea.addEventListener('input',()=>{autoResize(textarea)});


// Edit Post - Provide Post data to Edit Pop-up 
const editPost = (index) => {
    // Set title & Button
    document.querySelector('.post-pop-up .pop-up-title h1').innerText = 'Edit Post' 
    document.querySelector('.post-pop-up button').innerText = 'Edit Post' 
}
document.querySelectorAll('.post-update-btn').forEach((e,i)=>{
    e.addEventListener('click',()=>{editPost(i)})
});


const createPost = () => {
    // Set title & Button
    document.querySelector('.post-pop-up .pop-up-title h1').innerText = 'Create Post' 
    document.querySelector('.post-pop-up button').innerText = 'Create Post'
}
const createPostBtn = document.querySelector('nav .create-post-btn');
if (createPostBtn) createPostBtn.addEventListener('click',createPost);

// Delete Post Confirm Dialogue
document.querySelectorAll('.post-delete-btn')
.forEach(e=>{e.addEventListener('submit',function(event){
    const userConfirmed = confirm('Are you sure you want to delete this post?');
    if (!userConfirmed) {
        event.preventDefault(); 
    }
})})


// Mock Login 
const successIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
const errorIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'

const register = () => {
    const username = document.querySelector('input[name="name"').value
    const password = document.querySelector('input[name="password"').value
    if (username === '' || password === '') return
    else if ((username === 'Chanombude')) {
        document.querySelector('.status').innerHTML = '<div class="snackbar-msg" id="snackbar-msg"></div>';
        const message = errorIcon + 'This username already associate with an account'
        const status = document.querySelector('.snackbar-msg')
        status.classList.add('error');
        status.innerHTML = message; 
        showSnackbarMsg()
    }
    else {
        document.querySelector('.status').innerHTML = '<div class="snackbar-msg" id="snackbar-msg"></div>';
        const message = successIcon + 'Registered Successfully'
        const status = document.querySelector('.snackbar-msg')
        status.classList.add('success');
        status.innerHTML = message;
        showSnackbarMsg()
    }

}

const login = () => {
    const username = document.querySelector('input[name="name"').value
    const password = document.querySelector('input[name="password"').value
    if ((username === 'Chanombude' && password === '555')) {
        localStorage.setItem('login', true);
        window.location.href = '../index.html';
    }
    else if (username === '' || password === '') return
    else {
        document.querySelector('.status').innerHTML = '<div class="snackbar-msg error" id="snackbar-msg"></div>';
        const message = errorIcon + 'Password is incorrect'
        const status = document.querySelector('.snackbar-msg')
        status.classList.add('error');
        status.innerHTML = message;
        showSnackbarMsg()
    }
}

function logout () {
    localStorage.clear();
    location.reload();
}

// Navbar
document.querySelector('.links-container.not-logged-in').style.display = 'none';
document.querySelector('.links-container.logged-in').style.display = 'flex';

function toBoolean(str) {
    if (str) return str.toLowerCase() === 'true'
    return false;
}
const loginStatus = toBoolean(localStorage.getItem('login'))
console.log('Login : ',loginStatus)
// if not logged in
if (!loginStatus) {
    document.querySelectorAll('.post-edit-btn-container').forEach(e=>{e.style.display = 'none'})
    const profileEdit = document.querySelector('.profile-update-btn')
    if (profileEdit) profileEdit.style.display = 'none';
    
    document.querySelector('.links-container.not-logged-in').style.display = 'flex';
    document.querySelector('.links-container.logged-in').style.display = 'none';

}
