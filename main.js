    // Attempt 1 Event listeners in JS
// function erase(element,element2) {
//     profile = document.querySelector(element);
//     lessconnections = document.querySelector(element2);
//     let connectionNumbers = parseInt(lessconnections.innerText);
//     profile.remove();
//     connectionNumbers--;
//     lessconnections.innerText = connectionNumbers;
// }

// function erase2(element,element2,element3) {
//     profile = document.querySelector(element);
//     lessconnections = document.querySelector(element2);
//     addconnections = document.querySelector(element3);
//     let connectionNumbers = parseInt(lessconnections.innerText);
//     let addNumbers = parseInt(addconnections.innerText);
//     profile.remove();
//     connectionNumbers--;
//     addNumbers++;
//     lessconnections.innerText = connectionNumbers;
//     addconnections.innerText = addNumbers;
// }

// function edit(element) {
//     silvia = document.querySelector(element);
//     console.log(silvia);
//     silvia.innerText = 'Silvia Castro';
// }

    // Attempt 2 no inline JS

let editClick = document.querySelector("#edit");
let icon = document.querySelectorAll(".decideIcon");
let addConnections = document.querySelector(".number");
let addConnectionsNum = parseInt(addConnections.innerText);
let connections = document.querySelector(".add");
let connectionsAccepted = parseInt(connections.innerText);
console.log(addConnectionsNum);


function removeProfile (e) {

    btnObject = e.target;
    let profile = e.target.closest('div');
    profile.remove();
    addConnectionsNum --;
    addConnections.innerText = `${addConnectionsNum}`;
    if (btnObject.classList.contains("accept")) {
        connectionsAccepted ++;
        connections.innerText = `${connectionsAccepted}`;
        
    }  
}

editClick.addEventListener("click", (e) => {
    let name = document.querySelector(".name");
    name.innerText = `Silvia Castro`;
})

for (let i=0; i<icon.length;i++) {
    icon[i].addEventListener("click", removeProfile);
}
