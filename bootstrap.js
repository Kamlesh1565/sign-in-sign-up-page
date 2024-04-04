// sign up form 
const form = document.querySelector('form')
const submitBtn = document.querySelector('#submit')

const idInput = document.querySelector('#id')
const passwordInput = document.querySelector('#password')



if(localStorage.getItem('id') === null){
    var UserId = []
}else{
    var UserId = JSON.parse(localStorage.getItem('id'));
}

if(localStorage.getItem('password') === null){
    var UserPassword = []
}else{
    var UserPassword = JSON.parse(localStorage.getItem('password'));
}

function onSignUp(e) {
    e.preventDefault()
    let id = idInput.value
    let password = passwordInput.value
    
    if(UserId.includes(id) && UserPassword.includes(password)){
        h3.innerText = 'User Already Exists'
        return;
    }else{
        
        h3.innerText = ''

        UserId.push(id)
        UserPassword.push(password)
        
        console.log(UserId, UserPassword);
        
        
        
        localStorage.setItem('id', JSON.stringify(UserId))
        localStorage.setItem('password', JSON.stringify(UserPassword))
        
        idInput.value = ''
        passwordInput.value = ''
        
    }
}




// sign in form 

const signInForm = document.querySelector('#sign-in')
const signInSubmitBtn = document.querySelector('#sign-in-submit')

const signInIdInput = document.querySelector('#sign-in-id')
const signInPasswordInput = document.querySelector('#sign-in-password')

const h3 = document.querySelector('#h3')
const toggleSignInBtn = document.querySelector('#toggle-sign-in')
const toggleSignUpBtn = document.querySelector('#toggle-sign-up')
const cover = document.querySelector('.cover')
console.log(cover);

function onSignIn(e){
    e.preventDefault();


    let id = signInIdInput.value
    let password = signInPasswordInput.value
    
    if(UserId.includes(id) && UserPassword.includes(password)){
        h3.innerText = 'Sign In Successful'
    }else{
        h3.innerText=''
        alert("Incorrect Credentials")
    }


}

// console.log(cover.querySelector('h2').children[0]);

function toggleSignIn(e){
    cover.classList.remove('to-right')
    cover.querySelector('h2').children[0].innerText = 'Welcome Back!!'
    cover.querySelector('h2').children[1].innerText = 'Sign In to continue'

    cover.querySelector('h3').children[0].innerText = 'Not a user? Click to register'
    cover.querySelector('h3').children[1].style.display = 'none'
    toggleSignUpBtn.style.display =  'block'
    cover.classList.add('toggle-sign-in')
}

function toggleSignUp(e){
    cover.classList.remove('toggle-sign-in')
    cover.querySelector('h2').children[0].innerText = 'Welcome!!'
    cover.querySelector('h2').children[1].innerText = 'Sign Up to Continue'

    cover.querySelector('h3').children[0].innerText = 'Already a user? Sign In instead'
    cover.querySelector('h3').children[1].style.display = 'block'
    toggleSignUpBtn.style.display =  'none'
    cover.classList.add('to-right')
}

// event Listeners
form.addEventListener('submit', onSignUp)
signInForm.addEventListener('submit', onSignIn)
toggleSignInBtn.addEventListener('click' ,toggleSignIn)
toggleSignUpBtn.addEventListener('click' ,toggleSignUp)

