let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        

    }
}
function clr(){
    result.value='';
}
function Del(){
    result.value=result.value.slice(0,-1)
}