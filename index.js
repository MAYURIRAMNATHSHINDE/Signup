function signup(userName){
    let Name=["Padmavati","Mayuri","Malan","Shree","Shrushti"];
    for(i=0;i<Name.length;i++){
        if(userName==Name[i]){
            console.log("User Already Regsistered, Please Login");
        }
        else{
            console.log("Signup Sucessfull, Please Login");
        }
    }


}

function login(userName, password){
    let name=["Padmavati","Mayuri","Malan","Shree","Shrushti"];
    let validPassword="Emp@123";

    for(let i=0;i<name.length;i++)
    {
        if(userName==name[i])
            {
                if (password === validPassword) {
                    return "Login Successful...";
                } else {
                    return "Wrong Password...";
                }
            }
    }
    
}