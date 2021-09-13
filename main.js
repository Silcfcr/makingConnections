

function erase(element,element2) {
    profile = document.querySelector(element);
    lessconnections = document.querySelector(element2);
    let connectionNumbers = parseInt(lessconnections.innerText);
    profile.remove();
    connectionNumbers--;
    lessconnections.innerText = connectionNumbers;
}

function erase2(element,element2,element3) {
    profile = document.querySelector(element);
    lessconnections = document.querySelector(element2);
    addconnections = document.querySelector(element3);
    let connectionNumbers = parseInt(lessconnections.innerText);
    let addNumbers = parseInt(addconnections.innerText);
    profile.remove();
    connectionNumbers--;
    addNumbers++;
    lessconnections.innerText = connectionNumbers;
    addconnections.innerText = addNumbers;
}

function edit(element) {
    silvia = document.querySelector(element);
    console.log(silvia);
    silvia.innerText = 'Silvia Castro';
}