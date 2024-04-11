let a=5
let b=7
const c=document.getElementById('br1').value;
console.log(c)
function zbir1(x,y) {
   
    let zbir=x+y
    console.log(c)
    return zbir
    
}
function zbir2(x,y) {    
    return x+y   
}
const zbir3=(x,y)=>{
    return x+y
}
function oboji() {
    let sifraBoje=document.getElementById('boja').value;
    document.getElementById('kon2').style.backgroundColor=sifraBoje
    
}
function celzijusToFarenhajd(tc) {
    let tf=tc*1.8+32
    document.getElementById('far').innerHTML=tf+' F'
    
}
function farenfajdToCelzijus(tf) {
    let tc=(tf-32)/1.8
    document.getElementById('cel2').innerHTML=tc+' C'
    
}