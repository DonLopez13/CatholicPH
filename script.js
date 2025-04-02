// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign Up Function
function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert('Sign Up Successful');
            showLogout();
        })
        .catch(error => {
            alert(error.message);
        });
}

// Log In Function
function logIn() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert('Log In Successful');
            showLogout();
        })
        .catch(error => {
            alert(error.message);
        });
}

// Log Out Function
function logOut() {
    auth.signOut()
        .then(() => {
            alert('Logged out');
            showLogin();
        });
}

// Show Log Out, Hide Sign Up/Login
function showLogout() {
    document.getElementById('logout').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'none';
}

// Show Sign Up and Log In, Hide Log Out
function showLogin() {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'block';
}

// Check if user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        showLogout();
    } else {
        showLogin();
    }
});

// Search Functionality
function searchContent() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// Add event listener to the search bar
document.getElementById('search-bar').addEventListener('input', searchContent);
