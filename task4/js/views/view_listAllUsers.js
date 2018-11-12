task4Ctr.view_listAllUsers = function(){
    let title = 'listAllUsers';
    let pageContent = task4Ctr.createElementFromTemplate('#listAllUsersTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
    task4Ctr.ctr_listAllUsers();
}