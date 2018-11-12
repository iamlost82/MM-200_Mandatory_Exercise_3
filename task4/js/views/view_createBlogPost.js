task4Ctr.view_createBlogPost = function(){
    let title = 'createBlogPost';
    let pageContent = task4Ctr.createElementFromTemplate('#createBlogPostTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
    task4Ctr.ctr_createBlogPost();
}