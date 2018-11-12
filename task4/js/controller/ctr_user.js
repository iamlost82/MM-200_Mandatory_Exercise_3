task4Ctr.ctr_loginUser = function(){
    (function(){
        let gotoCreateNewUserLink = document.querySelector('#newUserLink');
        gotoCreateNewUserLink.addEventListener('click',function(){
            task4Ctr.view_createUser()
        });
    })();
    document.querySelector('#loginBtn').addEventListener('click', async function(){
        let username = document.querySelector('#loginUserNameInp').value;
        let password = document.querySelector('#loginPasswordInp').value;
        if(username.length > 1 && password.length > 1){
            let fdata = new FormData();
            fdata.append('loginname', username);
            fdata.append('password', password);

            let fetchSettings = {
                method: "POST",
                body: fdata
            }
            let url = "http://blogfog.herokuapp.com/blogfog/users/auth/";
            try {
                let response = await fetch(url,fetchSettings);
                let data = await response.json();
                if(data.token){
                    localStorage.setItem('token',data.token);
                    await task4Ctr.view_listAllBlogPosts();
                }
            } catch (error) {
                console.log(error);
            }


        } else{
            console.log('Username and password must be at least 1 char long');
        }
    });
}

task4Ctr.ctr_createUser = function(){
    (function(){
        let gotoLoginLink = document.querySelector('#backToLoginLink');
        gotoLoginLink.addEventListener('click',function(){
            task4Ctr.view_loginUser();
        });
    })();
    document.querySelector('#createUserBtn').addEventListener('click', async function(){
        let username = document.querySelector('#createUserNameInp').value;
        let password = document.querySelector('#createPasswordInp').value;
        let fullname = document.querySelector('#createFullNameInp').value;
        let avatar = document.querySelector('#createAvatar').value;
        if(username.length > 1 && password.length > 1 && fullname.length > 1){
            let fdata = new FormData();
            fdata.append('avatar', avatar);
            fdata.append('fullname', fullname);
            fdata.append('loginname', username);
            fdata.append('password', password);

            let fetchSettings = {
                method: "POST",
                body: fdata
            }
            let url = "http://blogfog.herokuapp.com/blogfog/users/";
            try {
                let response = await fetch(url,fetchSettings);
                let data = await response.json();
                localStorage.setItem('token',data.token);
                task4Ctr.view_listAllBlogPosts();
            } catch (error) {
                console.log(error);
            }


        } else{
            console.log('Username and password must be at least 1 char long');
        }
    });
}

task4Ctr.ctr_listAllUsers = async function(){
    let token = localStorage.getItem('token');
    let url = `http://blogfog.herokuapp.com/blogfog/users/?token=${token}`;
    let data = null;
    try {
        let response = await fetch(url);
        if(response.status === 200){
            data = await response.json();
            data = await data.reverse();
            outputUserListToView(data);
        } else{
            data = fetchAlternateData();
            outputUserListToView(data);
            addOfflineMsg();
        }
    } catch (error) {
        data = fetchAlternateData();
        outputUserListToView(data);
        addOfflineMsg();
    }
}
function fetchAlternateUserData(){
    let data = null;
        data = [
            {
                login: 'Not available while offline',
                fullname: 'Not available while offline',
                image : ''
            }
        ]
    return data;
}
function outputUserListToView(data){
    let outputDiv = document.querySelector('#userListDiv');
    for(i in data){
        if(data[i].image === ''){
            data[i].image = './graphic/tmp_user.png'
        }

        let div = document.createElement('div');
        let image = document.createElement('img');
        let login = document.createElement('p');
        let fullname = document.createElement('p');

        div.className = 'user-list-item';
        image.className = 'user-list-avatar';

        image.src = data[i].image;
        login.innerHTML = `Login name: ${data[i].login}`;
        fullname.innerHTML = `Full name: ${data[i].fullname}`;

        div.appendChild(image);
        div.appendChild(login);
        div.appendChild(fullname);

        outputDiv.appendChild(div);

    }    
}