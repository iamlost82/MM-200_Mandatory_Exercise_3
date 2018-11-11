document.addEventListener("DOMContentLoaded", function() { 
    task4Ctr.ctr_navigation();
});

task4Ctr.ctr_navigation = function(){
    let menu = document.querySelector('nav');
    function toggleDropDownMenu(){
        menuItemsDiv = document.querySelector('#menuItems');
        menuItemsDiv.classList.toggle('dropdown-hidden');
    }
    function navigateToPage(lastClickedButton){
        if(lastClickedButton !== 'expandMenu'){
            sessionStorage.setItem('lastClickedButton',lastClickedButton);
        }
        switch(lastClickedButton){
            case 'expandMenu':
                toggleDropDownMenu();
                break;
            case 'menuHomeBtn':
                task4Ctr.view_listAllBlogPosts();
                toggleDropDownMenu();
                break;
            case 'menuNewPostBtn':
                task4Ctr.view_createBlogPost();
                toggleDropDownMenu();
                break;
            default :
                toggleDropDownMenu();
                break;
        }
    }
    menu.addEventListener('click', function(evt){
        navigateToPage(evt.target.id);
    });
    if(sessionStorage.getItem('lastClickedButton')){
        let lastClickedButton = sessionStorage.getItem('lastClickedButton');
        navigateToPage(lastClickedButton);
        toggleDropDownMenu();
    }
};