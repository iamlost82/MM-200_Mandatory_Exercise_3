task4Ctr.ctr_createUser = function(){
    (function(){
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
            } catch (error) {
                console.log(error);
            }


        } else{
            console.log('Username and password must be at least 1 char long');
        }
    });
}