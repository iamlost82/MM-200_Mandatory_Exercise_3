let headerTxt = document.querySelector('#headerTxt');
(function(){
    let task2aBtn = document.querySelector('#showTask2ABtn');
    let task2bBtn = document.querySelector('#showTask2BBtn');
    let task2cBtn = document.querySelector('#showTask2CBtn');
    if(sessionStorage.getItem('activePage')){
        eval(sessionStorage.getItem('activePage'));
    } else{
        displayTask2a();
    }
    task2aBtn.addEventListener('click',displayTask2a);
    task2bBtn.addEventListener('click',displayTask2b);
    task2cBtn.addEventListener('click',displayTask2c);
})();
//Render template elements
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

function displayTask2a(){
    let pageContent = createElementFromTemplate('#task2aTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
    headerTxt.innerHTML = 'Task 2A';
    sessionStorage.setItem('activePage','displayTask2a()');
}
function displayTask2b(){
    let pageContent = createElementFromTemplate('#task2bTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
    headerTxt.innerHTML = 'Task 2B';
    sessionStorage.setItem('activePage','displayTask2b()');
}
function displayTask2c(){
    let pageContent = createElementFromTemplate('#task2cTemp');
    clearScreen();
    addTemplateElementToPage(pageContent);
    headerTxt.innerHTML = 'Task 2C';
    sessionStorage.setItem('activePage','displayTask2c()');
}