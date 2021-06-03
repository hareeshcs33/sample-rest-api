console.log('fetch.js');

document.getElementById('getCta').addEventListener('click', getMethodCalled);
document.getElementById('postCta').addEventListener('click', postMethodCalled);

function getMethodCalled(){
    console.log('getMethodCalled');
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(data => console.log(data))
}

function postMethodCalled(){
    console.log('postMethodCalled');
}