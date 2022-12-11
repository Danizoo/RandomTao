/* function genRandomNum(){
    document.getElementById("rand").innerHTML = (Math.ceil((Math.random()*84)));
  } */


const d = new Date();
dd = d.getDate();

var r2 = Math.ceil((Math.random()*12));
var name1 = 'https://raw.githubusercontent.com/Danizoo/RandomTao/main/BGPics/Unsplash/' + r2 + '.jpg';
var name2 = "url(" + String(name1) + ")";

/* document.getElementById("BG").style.backgroundImage = name2; */
document.body.style.backgroundImage = name2;



function genRandomNum(){
    var r = (Math.ceil((Math.random()*81)));
    var randomChapEn1 = document.getElementById('randomChapEn1');
    var randomChapCh = document.getElementById('randomChapCh');

    document.getElementById("chapTitle").innerText = "Chapter " + r;

    // This is the method of getting an English chapter by reading different text file at a time, seperately.
    // ------------------------------------------------------------------------------------------------------
    /* fetch('/Chapters/Chap' + r + 'en1.txt').then(response=>response.text()).then(data=>{
      randomChapEn1.innerText = data;
    }) */

    // This is the method of getting a Chinese chapter by reading different text file at a time, seperately.
    // ------------------------------------------------------------------------------------------------------
    /* fetch('/Chapters/Chap' + r + 'ch.txt').then(response=>response.text()).then(data=>{
      randomChapCh.innerText = data;
    }) */
    
    fetch('https://raw.githubusercontent.com/Danizoo/RandomTao/main/Chapters/TaoTeChing_All_Ch1.txt').then(response=>response.text()).then(data=>{
      
      var txtSplitStart = 0;
      var txtSplitEnd = 0;

      // Getting the text file indexes to slice the text according to the current random number that's indexing chapter:
      // ---------------------------------------------------------------------------------------------------------------
      for (let c = 0; c < data.length; c++) {

        if ((String(data[c]+data[c+1])) == String(r)) {
          txtSplitStart = c + 4;
        }
        else if ((String(data[c]+data[c+1])) == ("0" + String(r))) {
          txtSplitStart = c + 4;
        }

        if ((String(data[c]+data[c+1])) == String(r+1)) {
          txtSplitEnd = c;
        }
        else if ((String(data[c]+data[c+1])) == ("0" + String(r+1))) {
          txtSplitEnd = c;
        }

      }

      randomChapCh.innerText = data.slice(txtSplitStart, txtSplitEnd);

    })


    fetch('https://raw.githubusercontent.com/Danizoo/RandomTao/main/Chapters/TaoTeChing_All_En1_StephanMitchell.txt').then(response=>response.text()).then(data=>{

      var txtSplitStart = 0;
      var txtSplitEnd = 0;

      // Getting the text file indexes to slice the text according to the current random number that's indexing chapter:
      // ---------------------------------------------------------------------------------------------------------------
      for (let j = 0; j < data.length; j++) {

        if ((String(data[j]+data[j+1])) == String(r)) {
          txtSplitStart = j + 4;
        }
        else if ((String(data[j]+data[j+1])) == ("0" + String(r))) {
          txtSplitStart = j + 4;
        }

        if ((String(data[j]+data[j+1])) == String(r+1)) {
          txtSplitEnd = j;
        }
        else if ((String(data[j]+data[j+1])) == ("0" + String(r+1))) {
          txtSplitEnd = j;
        }

      }

      randomChapEn1.innerText = data.slice(txtSplitStart, txtSplitEnd);
    
    })
}



// initializing server for bg image:
/* 1) Open your terminal and type

npm install -g http-server

2) Go to the root folder that you want to serve you files and type:

http-server ./

3) Read the output of the terminal, something kinda http://localhost:8080 will appear.

Everything on there will be allowed to be got. Example:

background: url('http://localhost:8080/waw.png'); */




// This is a function that sends to a random page

/* function directToChapter() {
    var r = (Math.ceil((Math.random()*10)));
    window.location.href = 'Pages/chap' + r + '.html';
} */

