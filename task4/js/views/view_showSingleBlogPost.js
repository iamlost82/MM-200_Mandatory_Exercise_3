task4Ctr.view_showSingleBlogPost = function(){
    let title = 'showSingleBlogPost';
    let pageContent = task4Ctr.createElementFromTemplate('#showSingleBlogPostTemp');
    task4Ctr.clearScreen();
    task4Ctr.addTemplateElementToPage(pageContent);
    sessionStorage.setItem('lastVisitedPage',title);
    task4Ctr.ctr_showSingleBlogPost();
}