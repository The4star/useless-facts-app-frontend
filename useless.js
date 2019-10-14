const logOutButton = document.querySelector('#log-out')
const uselessButton = document.querySelector('.useless')
const display = document.querySelector('.the-useless-fact')

const logOut = (e) => {
    localStorage.removeItem('token');
    document.location.href = "./index.html"
}

const getUselessFact = async (e) => {
    try {
        
        const response = await axios.get('https://useless-facts-app.herokuapp.com/fetch');
        const data = response.data;
        

        display.innerHTML =`
        <img src="${data.photo}">
        <p><i>"${data.fact}"</i></p>
        `
    } catch (error) {
        console.log(error)
    }
};

const checkIfUser = () => {
    user = localStorage.getItem('token')
    if(!user) {
        document.location.href = './index.html';
    };
};

window.addEventListener('load', checkIfUser);

logOutButton.addEventListener('click', logOut)
uselessButton.addEventListener('click', getUselessFact)