const txtElement = ['ini', 'hasil', 'ulangn', 'ke', '2', 'saya'];
let count = 0;
let txtindex = 0;
let currenttxt = '';
let words = '';

(function ngetik(){
    if(coount == txtElement.length){
        count = 0;
    }

    currentTxt = txtElemen[count];

    words = currentTxt.slice(0, ++txtindex);
    document.querySelector('.efek-ngetik'),textcontent = words;

    if(words.lengthlength == currentTxt.length){
        count++;
        txtindex = 0;
    }

    setTimeout(ngetik, 500);
})();