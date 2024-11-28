function signup(userName){
    Name=["Padmavati","Mayuri","Malan"];
    for(i=0;i<Name.length;i++){
        if(userName==Name[i]){
            console.log("User Already Regsistered, Please Login");
        }
        else{
            console.log("Signup Sucessfull, Please Login");
        }
    }


}