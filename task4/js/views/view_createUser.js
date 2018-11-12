task4Ctr.view_createUser = function(){
    let title = 'createUser';
    let pageContent = task4Ctr.createElementFromTemplate('#createUserTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
    task4Ctr.ctr_createUser();
}