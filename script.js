let login = document.querySelector('.login');

let create = document.querySelector('.create');

let container = document.querySelector('.container');

login.addEventListener('click',()=>{
    container.classList.add('signinpart');
})

create.addEventListener('click',()=>{
    container.classList.remove('signinpart');
})
