function addnumber(num){
    let a=document.querySelector('#res').innerHTML
    document.querySelector('#res').innerHTML=a+num
    
}
function addsinal(sin){
    let a =document.querySelector('#res').innerHTML
    let last = a.charAt(a.length -1)
    if (last  == '/' || last  == '*' || last  == '+' || last  == '-' || last  == '.'){
        null
    }else{
        document.querySelector('#res').innerHTML = a+sin
    }

}
function clean(){
    document.querySelector('#res').innerHTML=''
}
function delLast(){
    let a =document.querySelector('#res').innerHTML
    document.querySelector('#res').innerHTML = a.slice(0,-1)
}
function result(){
    let a =document.querySelector('#res').innerHTML
    document.querySelector('#res').innerHTML = eval(a)
}