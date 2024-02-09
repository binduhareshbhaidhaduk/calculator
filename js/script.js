const num =(ele)=>{
    if(display.innerHTML==0){
        display.innerHTML=''
        document.getElementById("display").innerHTML += ele ;

    }else{
        document.getElementById("display").innerHTML += ele ;

    }
}
const clr=()=>{
    display.innerHTML=0
    answer.innerHTML='0';
}

const ce=(ele)=>{
    
    let ans=display.innerHTML;
    display.innerHTML=ans.slice(0,-1);
    if(display.innerHTML==""){
        answer.innerHTML='0'
    }

}

const sum=()=>{
    const calculator=eval(display.innerHTML);
    answer.innerHTML=calculator;
}