let task4Ctr = {};

document.addEventListener("DOMContentLoaded", function() { 
    displayShowBlogPosts();
    task4Ctr.addTemplateElementToPage("jupp");
});

task4Ctr.addTemplateElementToPage = function(element){
    console.log(element);
}

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

function displayShowUsers(){
    let pageContent = createElementFromTemplate('#showUsersTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
}

function displayCreateBlogPost(){
    let pageContent = createElementFromTemplate('#createBlogPostTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
}

function displayShowBlogPosts(){
    let pageContent = createElementFromTemplate('#showBlogPostsTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
}