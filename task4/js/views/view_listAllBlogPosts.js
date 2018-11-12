task4Ctr.view_listAllBlogPosts = function (){
    let title = 'listAllBlogPosts';
    if(localStorage.getItem('token')==undefined){
        task4Ctr.view_loginUser();
    } else{
        let pageContent = task4Ctr.createElementFromTemplate('#listAllBlogPostsTemp');
        task4Ctr.clearScreen();
        task4Ctr.addTemplateElementToPage(pageContent);
        sessionStorage.setItem('lastVisitedPage',title);
        task4Ctr.ctr_listAllBlogPosts();
    }
}