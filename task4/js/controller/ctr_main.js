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