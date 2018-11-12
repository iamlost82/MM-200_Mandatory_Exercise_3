task4Ctr.view_showSingleUser = function(){
    let title = 'showSingleUser';
    let pageContent = task4Ctr.createElementFromTemplate('#showSingleUserTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
}