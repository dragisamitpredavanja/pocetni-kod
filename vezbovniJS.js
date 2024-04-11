function oboji() {
    sifraBoje=document.getElementById('boja').value;
    document.getElementById('kut2').style.backgroundColor=sifraBoje
    
}
function saberi() {
   let broj1=Number(document.getElementById('br1').value);
   let broj2=Number(document.getElementById('br2').value);
   console.log(typeof broj1)
   let zbir=broj1+broj2
   alert('zbir=='+zbir)
}