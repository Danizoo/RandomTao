/* function genRandomNum(){
    document.getElementById("rand").innerHTML = (Math.ceil((Math.random()*84)));
  } */



function genRandomNum(){
    var r = (Math.ceil((Math.random()*10)));
    var randomChapEn1 = document.getElementById('randomChapEn1');
    var randomChapCh = document.getElementById('randomChapCh');

    document.getElementById("chapTitle").innerText = "Chapter " + r;

    fetch('https://raw.githubusercontent.com/Danizoo/RandomTao/main/Chapters/Chap' + r + 'en1.txt').then(response=>response.text()).then(data=>{
      randomChapEn1.innerText = data;
    })
    fetch('https://raw.githubusercontent.com/Danizoo/RandomTao/main/Chapters/Chap' + r + 'ch.txt').then(response=>response.text()).then(data=>{
      randomChapCh.innerText = data;
    })
}


const d = new Date();
dd = d.getDate();

document.body.style.backgroundImage = "url('http://127.0.0.1:8081/BGPics/iccup-xNtwmcRP-gw-unsplash.jpg')"


// This is a function that sends to a random page

/* function directToChapter() {
    var r = (Math.ceil((Math.random()*10)));
    window.location.href = 'Pages/chap' + r + '.html';
} */

