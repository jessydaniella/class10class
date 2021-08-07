 let user = {
     name: 'Jessica',
     age: 22,
 };


function signIn(){ 
window.localStorage.setItem('user', JSON.stringify(user));
}
function getUser(){
    let userParagraph = document.getElementById('user');
    const user = JSON.parse(window.localStorage.getItem('user'));
    userParagraph.innerHTML = `${user.name} ${user.age}`
}
function signOut() {
    localStorage.removeItem('user')
    userParagraph.innerHTML ='';
}
