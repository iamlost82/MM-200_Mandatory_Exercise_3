document.addEventListener("DOMContentLoaded", function() { 
    task4Ctr.ctr_navigation();
});

task4Ctr.ctr_navigation = function(){
    let menu = document.querySelector('nav');
    let menuItemsDiv = document.querySelector('#menuItems');
    if(localStorage.getItem('token')){
        loggOutBtn = document.createElement('button');
        loggOutBtn.type = 'button';
        loggOutBtn.id = 'logOut';
        loggOutBtn.className = 'nav-item';
        loggOutBtn.innerHTML = 'Log out';
        menuItemsDiv.appendChild(loggOutBtn);
    }
    function toggleDropDownMenu(){
        menuItemsDiv.classList.toggle('dropdown-hidden');
    }
    function navigateToPage(lastVisitedPage){
        switch(lastVisitedPage){
            case 'expandMenu':
                toggleDropDownMenu();
                break;
            case 'listAllBlogPosts':
                task4Ctr.view_listAllBlogPosts();
                toggleDropDownMenu();
                break;
            case 'listAllUsers':
                task4Ctr.view_listAllUsers();
                toggleDropDownMenu();
                break;
            case 'createBlogPost':
                task4Ctr.view_createBlogPost();
                toggleDropDownMenu();
                break;
            case 'showSingleBlogPost':
                task4Ctr.view_showSingleBlogPost();
                toggleDropDownMenu();
                break;
            case 'createUser':
                task4Ctr.view_createUser();
                toggleDropDownMenu();
                break;
            case 'logOut':
                localStorage.clear();
                sessionStorage.clear();
                task4Ctr.view_listAllBlogPosts();
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
    if(sessionStorage.getItem('lastVisitedPage')){
        let lastVisitedPage = sessionStorage.getItem('lastVisitedPage');
        navigateToPage(lastVisitedPage);
        toggleDropDownMenu();
    } else{
        let lastVisitedPage = 'listAllBlogPosts';
        navigateToPage(lastVisitedPage);
        toggleDropDownMenu();
    }
};