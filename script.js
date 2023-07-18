let login = document.querySelector('.login');

let create = document.querySelector('.create');

let container = document.querySelector('.container');


let submit = document.querySelector('.submit-create');
let submit_login = document.querySelector('.submit-login');

const create_username = document.querySelector('.create-username');
const create_email = document.querySelector('.create-email');
const create_password = document.querySelector('.create-password');
const create_confirm_pasword = document.querySelector('.create-confirm-password');

const login_username = document.querySelector('.login-username');
const login_password = document.querySelector('.login-password');

login.addEventListener('click',()=>{
    container.classList.add('signinpart');
})

create.addEventListener('click',()=>{
    container.classList.remove('signinpart');
})

submit.addEventListener('click',(e)=>{
    cerror=[];
    lerror=[];
    const cusername=validater(create_username.value);
    const cemail=validater(create_email.value);
    const cpassword=create_password.value;
    const ccpassword=create_confirm_pasword.value;
    const re = /\S+@\S+\.\S+/;

    const lusername=validater(login_username.value);
    const lpassword=login_password.value;

    if(cusername=="" || cemail=="" || cpassword=="" || ccpassword=="")
        cerror.push("please fill all");
    if(cpassword.length<6)
        cerror.push("password to short");
    if(cpassword!=ccpassword)
        cerror.push("password does not match");
    if(!re.test(cemail))
        cerror.push("invalid email");
    
    if(lusername=="" || lpassword=="")
        lerror.push("please fill all");
    if(lpassword.length<6)
        lerror.push("password to short");
    
        console.log(cerror);
        console.log(lerror);
})

submit_login.addEventListener('click',(e)=>{
    lerror=[];

    const lusername=validater(login_username.value);
    const lpassword=login_password.value;

    if(lusername=="" || lpassword=="")
        lerror.push("please fill all");
    if(lpassword.length<6)
        lerror.push("password to short");
    
    console.log(lerror);
})


function validater(input)
{
    // Strip HTML characters and backslashes
    input = input.replace(/(<([^>]+)>|\\)/gi, '');

    return input;
}