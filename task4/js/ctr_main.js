(function(){
    displayCreateUser();
})();

function addTemplateElementToPage(element){
    document.getElementById('content').appendChild(element);
}
function clearScreen(){
    document.getElementById('content').innerHTML = "";
}
function createElementFromTemplate(templateID){
    let template = document.querySelector(templateID);
    let clone = document.importNode(template.content, true);
    return clone;
}

//Displays

function displayLogin(){
    let pageContent = createElementFromTemplate('#loginTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
}

function displayCreateUser(){
    let pageContent = createElementFromTemplate('#createUserTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
}