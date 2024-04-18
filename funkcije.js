let a=5
let b=7
function zbir1(x,y) {
    let zbir=x+y
    return zbir
    
}
function zbir2(x,y) {    
    return x+y   
}
const zbir3=(x,y)=>{
    return x+y
}
function celzijusToFarenhajd(tc) {
    let tf=tc*1.8 +32
    document.getElementById('far').innerHTML=tf+" F"
}
function farenfajdToCelzijus(tf) {
    let tc=(tf-32)/1.8 
    document.getElementById('cel2').innerHTML=tc+" C"
}
function dinarUstraneValute(kv,ud) {
    
    switch (iz) {
        case '1':
            // console.log(iz)
            document.getElementById('sv').innerHTML=' Eura'
            document.getElementById('upk').innerHTML=' Eura'
            break;
    
        case '2':
            document.getElementById('sv').innerHTML=' Dolara'
            document.getElementById('upk').innerHTML=' Dolara'
            break;
    
        case '3':
            document.getElementById('sv').innerHTML=' Svajcaraca'
            document.getElementById('upk').innerHTML=' Svajcaraca'
            break;
    
        default:
            break;
    }
    
}
function napraviIzbor(iz) {
    console.log(iz)
    switch (iz) {
        case '1':
            // console.log(iz)
            document.getElementById('sv').innerHTML=' Eura'
            document.getElementById('upk').innerHTML=' Eura'
            break;
    
        case '2':
            document.getElementById('sv').innerHTML=' Dolara'
            document.getElementById('upk').innerHTML=' Dolara'
            break;
    
        case '3':
            document.getElementById('sv').innerHTML=' Svajcaraca'
            document.getElementById('upk').innerHTML=' Svajcaraca'
            break;
    
        default:
            break;
    }
    
}
function dinarUstraneValute(kv,ud) {
    console.log(ud,kv)
    let oi=ud/kv
    document.getElementById('valuta').innerHTML=oi
    
}
