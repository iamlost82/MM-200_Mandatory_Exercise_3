let task4Ctr = {};

task4Ctr.addTemplateElementToPage = function(element){
    document.getElementById('content').appendChild(element);
}

task4Ctr.clearScreen = function(){
    document.getElementById('content').innerHTML = "";
}

task4Ctr.createElementFromTemplate = function(templateID){
    let template = document.querySelector(templateID);
    let clone = document.importNode(template.content, true);
    return clone;
}
task4Ctr.addOfflineMsg = function(){
    let offlineDiv = document.querySelector('#offlineDiv');
    let msg = document.createElement('h2');
    msg.class = "offline";
    msg.innerHTML = "Offline: Showing local data";
    offlineDiv.appendChild(msg);
}