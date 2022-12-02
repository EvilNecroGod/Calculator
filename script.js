let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equal = document.getElementById('equals');
let backspace = document.getElementById('backspace');
let buttons = document.querySelectorAll('.btn');
let confirm = 0;

window.onload = () =>{
    display.value ="";
};


buttons.forEach((each_button)=>{
    each_button.addEventListener('click',(e)=>{
            if(confirm == 1){
                display.value="";
                confirm = 0;
            }
            display.value += each_button.value;
    });
});   


equal.addEventListener('click', ()=>{
    confirm = 1;
    let dis_val = display.value;
    try{
        let answer = eval(dis_val);
    
        if(Number.isInteger(answer)){
            display.value = answer;
        }
        else{
            display.value = answer.toFixed(3);
        }
    }
    catch(err){
            display.value='Error';
            
            setTimeout(() => {
                display.value = ''; 
            }, 1000);
    }   
});

clear.addEventListener('click',()=>{
    display.value= "";
});

backspace.addEventListener('click',()=>{
    display.value = display.value.substr(0,display.value.length-1);
});