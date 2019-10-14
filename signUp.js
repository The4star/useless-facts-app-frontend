const signUpForm = document.querySelector('.sign-up-form');
const alert = document.querySelector('.alert');
const addToLocalStorage = (token) => {
    console.log(token);
    localStorage.setItem('token', token);
  }

const signUp = async (e) => {
    e.preventDefault();

    try {
        const username = signUpForm.querySelector('[name=username]').value;
        const password = signUpForm.querySelector('[name=password]').value;
        const response = await axios.post("https://useless-facts-app.herokuapp.com/auth/registration", {username, password});
        const token = response.data;
        if(!token) {
            signUpForm.reset()
        } else {
            addToLocalStorage(token);  
            document.location.href ="./useless-facts.html"
        }
    } catch (error) {
        console.log(error);  
        alert.innerHTML = '<h3>Username already taken</h3>'
    }
   
};

signUpForm.addEventListener('submit', signUp);