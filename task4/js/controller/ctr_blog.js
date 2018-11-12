let token = localStorage.getItem('token');
task4Ctr.ctr_listAllBlogPosts = async function(){
    let url = `http://blogfog.herokuapp.com/blogfog/posts/?token=${token}`;
    let data = null;
    try {
        let response = await fetch(url);
        if(response.status === 200){
            data = await response.json();
            data = await data.reverse();
            let lastposts = data.splice((data.length-5),data.length);
            localStorage.setItem('listLastBlogPosts', JSON.stringify(lastposts));
            outputBlogPostListToView(data);
        } else{
            data = fetchAlternateData();
            outputBlogPostListToView(data);
            task4Ctr.addOfflineMsg();
        }

    } catch (error) {
        data = fetchAlternateData();
        outputBlogPostListToView(data);
        task4Ctr.addOfflineMsg();
    }
}
task4Ctr.ctr_showSingleBlogPost = async function(){
    if(!sessionStorage.getItem('blogPostID')){
        task4Ctr.view_listAllBlogPosts();
    } else{
        let id = sessionStorage.getItem('blogPostID');
        let url = `http://blogfog.herokuapp.com/blogfog/posts/?token=${token}&blogpost_id=${id}`;
        let data = null;
        try {
            let response = await fetch(url);
            if(response.status === 200){
                data = await response.json();
                outputBlogPostListToView(data);
            } else{
                data = fetchAlternateData();
                outputBlogPostListToView(data);
                task4Ctr.addOfflineMsg();
            }
    
        } catch (error) {
            data = fetchAlternateData();
            outputBlogPostListToView(data);
            task4Ctr.addOfflineMsg();
        }
    }
}
task4Ctr.ctr_createBlogPost = function(){
    document.querySelector('#blogPostCreateBtn').addEventListener('click', async function(){
        let title = document.querySelector('#blogTitleInp').value;
        let image = document.querySelector('#blogPostImg').value;
        let blogpost = document.querySelector('#blogPostInp').value;
        let token = localStorage.getItem('token');
        console.log(image);

        if(title.length > 1 && blogpost.length > 1){
            let fdata = new FormData();
            fdata.append('title',title);
            fdata.append('image',image);
            fdata.append('blogpost',blogpost);

            let fetchSettings = {
                method: "POST",
                body: fdata
            }
            let url = "http://blogfog.herokuapp.com/blogfog/posts/?token="+token;
            try {
                let response = await fetch(url,fetchSettings);
                let data = await response.json();
                console.log(data);
                task4Ctr.view_listAllBlogPosts();
            } catch (error) {
                console.log(error);
            }


        } else{
            console.log('Title and post cannot be empty');
        }
    });
}
function fetchAlternateData(){
    let data = null;
    if(localStorage.getItem('listLastBlogPosts')){
        data = JSON.parse(localStorage.getItem('listLastBlogPosts'));
    } else{
        data = [
            {
                avatar: '',
                content: 'None found',
                date: '',
                fullname: '',
                id: '',
                image: '',
                login: '',
                title: 'None Found'
            }
        ]
    }
    return data;
}
function outputBlogPostListToView(data){
    let outputDiv = document.querySelector('#blogListDiv');
    for(i in data){
        let createdDate = new Date(data[i].date);
        createdDate = createdDate.toLocaleString();
        if(data[i].image === ""){
            data[i].image = "./graphic/tmp_blog.png"
        }
        if(data[i].avatar === ""){
            data[i].avatar = "./graphic/tmp_user.png"
        }

        let div = document.createElement('div');
        let imageContainer = document.createElement('div');
        let image = document.createElement('img');
        let avatar = document.createElement('img');
        let author = document.createElement('p');
        let created = document.createElement('p');
        let title = document.createElement('h2');

        div.id = data[i].id;

        if(data.length > 1){
            div.addEventListener('click', function(evt){
                let blogPostId = evt.target.closest('.blogPost').id;
                sessionStorage.setItem('blogPostID', blogPostId);
                task4Ctr.view_showSingleBlogPost();
            });
        }

        div.className = 'blogPost';
        imageContainer.className = 'blogListImageContainer';
        image.className = 'blogPhoto';
        avatar.className = 'avatar';

        image.src = data[i].image;
        avatar.src = data[i].avatar;
        author.innerHTML = `Created by: ${data[i].fullname}`;
        created.innerHTML = createdDate;
        title.innerHTML = data[i].title;

        imageContainer.appendChild(image);
        imageContainer.appendChild(avatar);
        div.appendChild(imageContainer);
        div.appendChild(author);
        div.appendChild(created);
        div.appendChild(title);

        if(data.length === 1){
            let content = document.createElement('p');
            content.className = "blog-content";
            content.innerHTML = data[i].content;
            div.appendChild(content);
        }

        outputDiv.appendChild(div);

    }
}