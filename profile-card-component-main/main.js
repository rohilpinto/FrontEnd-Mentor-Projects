
let username = document.querySelector('.username');
let userlocation = document.querySelector('.location');
let userimg = document.querySelector('.profile-bio img');
let card = document.querySelector('.card');
let cardPattern = document.querySelector('.card-pattern');
let followers = document.querySelector('.followers');
let likes = document.querySelector('.likes');
let photos = document.querySelector('.Photos');



const tl = gsap.timeline({ defaults:{ ease:"power1.out"}});


tl.fromTo(card, 1.5, {opacity:0},{opacity: 1})
tl.add('rotate')
tl.fromTo(cardPattern,1,{y:-50},{y:0})
tl.fromTo(username, {y:-50,opacity:0},{y:0, opacity:1, duration:.5})
tl.fromTo(userlocation,{opacity:0},{opacity:1,duration:.5})
tl.fromTo(userimg,{rotate:180, opacity:0.7},{rotate:0,opacity:1,duration:1.5},'rotate')
tl.add('info')
tl.fromTo(followers,.5,{x:-50,opacity:0},{x:0,opacity:1},'info')
tl.fromTo(likes,.5,{y:-30,opacity:0},{y:0,opacity:1},'info')
tl.fromTo(photos,.5,{x:50,opacity:0},{x:0,opacity:1},'info')


userimg.addEventListener('mouseover',zoom)
userimg.addEventListener('mouseout',zoomout)

function zoom(){
    const ntl = gsap.timeline({ defaults:{ ease:"power1.out"}});
    ntl.to(userimg,.5,{scale:1.2})
}

function zoomout(){
    const ntl = gsap.timeline({ defaults:{ ease:"power1.out"}});
    ntl.to(userimg,.5,{scale:1})
}