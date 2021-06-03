console.log('axios.js');



document.getElementById('getCta').addEventListener('click', getMethodCalled);
document.getElementById('postCta').addEventListener('click', postMethodCalled);

function getMethodCalled(){
    console.log('getMethodCalled');
    axios.get('https://reqres.in/api/users')
        // .then(res => console.log(res.data.data));
        .then(res => console.log(res));
}

function postMethodCalled(){
    console.log('postMethodCalled');
    axios.post('https://reqres.in/api/register', {
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    .then(res => console.log(res))
}

