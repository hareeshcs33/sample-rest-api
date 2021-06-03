console.log('xhr.js');

document.getElementById('getCta').addEventListener('click', getMethodCalled);
document.getElementById('postCta').addEventListener('click', postMethodCalled);


function getMethodCalled(){
    console.log('getMethodCalled');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function (){
        console.log(xhr.responseText);
    }

    xhr.send();
}

function postMethodCalled(){
    console.log('postMethodCalled');

    console.log('getMethodCalled');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        "title": "test title text",
        "body": "test body text"
    }));
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function (){
        console.log(xhr.responseText);
    }

    xhr.send();
}