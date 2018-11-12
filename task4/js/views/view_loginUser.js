task4Ctr.view_loginUser = function(){
    let title = 'listAllBlogPosts';
    let pageContent = task4Ctr.createElementFromTemplate('#loginUserTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
    task4Ctr.ctr_loginUser();
}