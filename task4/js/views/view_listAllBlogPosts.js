task4Ctr.view_listAllBlogPosts = function (){
    if(localStorage.getItem('token')==undefined){
        task4Ctr.view_loginUser();
    } else{
        let pageContent = task4Ctr.createElementFromTemplate('#listAllBlogPostsTemp');
        task4Ctr.clearScreen();
        task4Ctr.addTemplateElementToPage(pageContent);
        //task4Ctr.ctr_listAllBlogPosts();
    }
}