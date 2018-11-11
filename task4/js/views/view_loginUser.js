task4Ctr.view_loginUser = function(){
    let pageContent = task4Ctr.createElementFromTemplate('#loginUserTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    task4Ctr.ctr_loginUser();
}