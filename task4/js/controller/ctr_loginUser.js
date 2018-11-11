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
            let url = "http:// blogfog.herokuapp.com/blogfog/users/auth/";
            try {
                let response = await fetch(url,fetchSettings);
                let data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }


        } else{
            console.log('Username and password must be at least 1 char long');
        }
    });
}