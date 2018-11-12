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
    offlineDiv.innerHTML = '';
    let msg = document.createElement('h2');
    msg.class = "offline";
    msg.innerHTML = "Offline: Showing local data";
    offlineDiv.appendChild(msg);
}
task4Ctr.generateSlogan = function(){
    let sloganContainer = document.querySelector('#blogfogSlogan');
    let slogans = [
        `Blogfog - Simplified!`,
        `Feel It - Blogfog!`,
        `The Blogfog Effect.`,
        `Don't Play With Fire, Play With Blogfog.`,
        `With A Name Like Blogfog, It Has To Be Good.`,
        `Blogfog, Let The Good Times Roll.`,
        `Can You Tell Blogfog From Butter?`,
        `Let's Face The Music And Blogfog.`
    ];
    let i = Math.floor(Math.random()*(slogans.length));
    sloganContainer.innerHTML = slogans[i];
}