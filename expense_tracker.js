function income(){
    let inc=document.getElementById("inc-amt").value;
        document.getElementById("bs-inc").innerText=inc;
        document.getElementById("inc-description").value='';
         document.getElementById("inc-amt").value='';
         
         
}


function expence(){
 let expt=document.getElementById("exp-description").value;
    document.getElementById("th-des").innerText=expt;
    document.getElementById("exp-description").value= "";

let cate=document.getElementById("exp-category").value;
    document.getElementById("th-cat").innerText=cate;
    document.getElementById("exp-category").value='';

let amtt=document.getElementById("exp-amount").value;
    document.getElementById("th-amt").innerText=amtt;
    document.getElementById("exp-amount").value='';    
}


function add_income(){
    let inc=document.getElementById("bs-inc").innerText;
    let ex=document.getElementById("th-amt").innerText;
        document.getElementById("bs-texp").innerText=ex;
        document.getElementById("th-des").innerText='';
        document.getElementById("th-cat").innerText='';
        document.getElementById("th-amt").innerText='';

    let addition=inc-ex;
        document.getElementById("bs-bal").innerText=addition;

        localStorage.setItem('inc', inc);
        localStorage.setItem('exp',ex );
        localStorage.setItem('bal', addition);
}


function clearall(){
    document.getElementById("bs-inc").innerText='';
    document.getElementById("bs-texp").innerText='';
    document.getElementById("bs-bal").innerText='';
    document.getElementById("zzz").innerText='';
}