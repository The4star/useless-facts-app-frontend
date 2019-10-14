const logInForm = document.querySelector('.login-form');
const alert = document.querySelector('.alert');

const addToLocalStorage = (token) => {
    console.log(token);
    localStorage.setItem('token', token);
  }

const logIn = async (e) => {
    e.preventDefault();

    try {
        const username = logInForm.querySelector('[name=username]').value;
        const password = logInForm.querySelector('[name=password]').value;
        const response = await axios.get("https://useless-facts-app.herokuapp.com/auth/login", { auth: {username, password} });
        const token = response.data;

        if(!token) {
            logInForm.reset()
        } else {
            addToLocalStorage(token);  
            document.location.href ="./useless-facts.html"
        }
        addToLocalStorage(token);
    } catch (error) {
        console.log(error);
        alert.innerHTML = '<h3>Username or Password Incorrect</h3>'
    }
};

logInForm.addEventListener('submit', logIn);