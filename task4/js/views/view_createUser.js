task4Ctr.view_createUser = function(){
    let pageContent = task4Ctr.createElementFromTemplate('#createUserTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    task4Ctr.ctr_createUser();
}