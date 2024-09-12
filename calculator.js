const buttons=document.getElementById("buttons");
const buttomInput=document.getElementById("bottomInput");
const upperInput=document.getElementById("upperInput")
const histValue=document.getElementById('historyValue')
let inputString="";
let convertedInputString=""
let equalToIsclicked=false;
let result="";
let isPositive=true;
let temp;
let i=0;
let j=0;
function appendToDisplay(id)
{   
  switch(id)
  {  
    case 0:
        let temp4
        console.log(convertedInputString)
        temp4=percentx(inputString,convertedInputString);
        convertedInputString=temp4[0];
        inputString=temp4[1];
        break;
    case 1:
        inputString=""
        convertedInputString="";
        temp=upperInput.value;
        break;
    case 2:
        inputString="";
        convertedInputString="";
        buttomInput.value=0;
        upperInput.value=0;
        break;
    case 3:
        inputString=inputString.slice(0,inputString.lastIndexOf())
        convertedInputString=convertedInputString.slice(0,convertedInputString.lastIndexOf())
         break;
    case 4:
         let temp1=oneOverX(inputString,convertedInputString);
         inputString=temp1[1];
         convertedInputString=temp1[0];
        break;
    case 5:
        let temp2
         temp2=xSquare(inputString,convertedInputString);
         convertedInputString=temp2[0];
         inputString=temp2[1]
         
        break;
    case 6:
         let temp3;
         temp3=squareRootX(inputString,convertedInputString);
         inputString=temp3[1];
         convertedInputString=temp3[0];
        break;
    case 7:
        result=eval(convertedInputString);
        upperInput.value=result;
        inputString+="÷";
        convertedInputString+="/";
        break;
    case 8:
        inputString+=btn8.textContent;
        convertedInputString+=btn8.textContent;
        break;
    case 9:
        inputString+=btn9.textContent;
        convertedInputString+=btn9.textContent;
        break;
    case 10:
        inputString+=btn10.textContent;
        convertedInputString+=btn10.textContent;
        break;
    case 11:
        result=eval(convertedInputString);
        upperInput.value=result;
        inputString+="x";
        convertedInputString+="*"
        break;
    case 12:
        inputString+=btn12.textContent;
        convertedInputString+=btn12.textContent;
        break;
    case 13:
        inputString+=btn13.textContent;
        convertedInputString+=btn13.textContent;
        break;
    case 14:
        inputString+=btn14.textContent;
        convertedInputString+=btn14.textContent;
        break;
    case 15:
        console.log(convertedInputString)
        result=eval(convertedInputString);
        upperInput.value=result;
        inputString+=btn15.textContent;
        convertedInputString+=btn15.textContent;
        break;
    case 16:
        inputString+=btn16.textContent;
        convertedInputString+=btn16.textContent;
        break;
    case 17:
        inputString+=btn17.textContent;
        convertedInputString+=btn17.textContent;
        break;
    case 18:
        inputString+=btn18.textContent;
        convertedInputString+=btn18.textContent;
        break;
    case 19:
        result=eval(convertedInputString);
        upperInput.value=result;
        inputString+=btn19.textContent;
        convertedInputString+=btn19.textContent;
        break;
    case 20:
        temp5= pi(inputString);
        convertedInputString=temp5[0];
        inputString=temp5[1]
        break;
    case 21:
        inputString+=btn21.textContent;
        convertedInputString+=btn21.textContent;
        break;
    case 22:
        inputString+=btn22.textContent;
        convertedInputString+=btn22.textContent;
        break;
    case 23:
       equalToIsclicked=true;
       if(inputString=="")
            {
               inputString=temp;
               convertedInputString=temp;
             }
        try{
             result=eval(convertedInputString)
             upperInput.value=result;
             buttomInput.value=result;
             console.log(result)
        }
        catch(error)
        {   console.log("inside error")
            upperInput.value="Error"
            buttomInput.value="Error";
        }
      

    
        break;
  }
 

 if(equalToIsclicked && upperInput.value!=="Error" )
 {
    buttomInput.value=result;
    equalToIsclicked=false;
 }
 else
{
     
buttomInput.value= inputString;
 }

}
const btn0=document.getElementById("b0");
btn0.textContent="%"
const btn1=document.getElementById("b1");
btn1.textContent="CE"
const btn2=document.getElementById("b2");
btn2.textContent="C"
const btn3=document.getElementById("b3");
btn3.textContent="del"
const btn4=document.getElementById("b4");
btn4.textContent="1/x"
const btn5=document.getElementById("b5");
btn5.textContent="x^2"
const btn6=document.getElementById("b6");
btn6.textContent="sqr(x)"
const btn7=document.getElementById("b7");
btn7.textContent="÷"
const btn8=document.getElementById("b8");
btn8.textContent="7"
const btn9=document.getElementById("b9");
btn9.textContent="8"
const btn10=document.getElementById("b10");
btn10.textContent="9"
const btn11=document.getElementById("b11");
btn11.textContent="x"
const btn12=document.getElementById("b12");
btn12.textContent="4"
const btn13=document.getElementById("b13");
btn13.textContent="5"
const btn14=document.getElementById("b14");
btn14.textContent="6"
const btn15=document.getElementById("b15");
btn15.textContent="-"
const btn16=document.getElementById("b16");
btn16.textContent="1"
const btn17=document.getElementById("b17");
btn17.textContent="2"
const btn18=document.getElementById("b18");
btn18.textContent="3"
const btn19=document.getElementById("b19");
btn19.textContent="+"
const btn20=document.getElementById("b20");
btn20.textContent="⊼"
const btn21=document.getElementById("b21");
btn21.textContent="0"
const btn22=document.getElementById("b22");
btn22.textContent="."
const btn23=document.getElementById("b23");
btn23.textContent="="

btn23.style.backgroundColor='rgb(9, 70, 236)'
btn23.style.color='white'

function oneOverX(inputString,convertedInputString)
{    let index=[]
    
    index.push(Number(String(inputString).lastIndexOf("+")))
    index.push(Number(String(inputString).lastIndexOf("-")))
    index.push(mul= Number(String(inputString).lastIndexOf("x")))
    index.push(Number(String(inputString).lastIndexOf("÷"))) 
    let max= index.reduce((accumulator,element)=> {return Math.max(accumulator,element)} )
    let num= String(inputString).slice(max+1)
    let  forConverted=String(convertedInputString).slice(0,max+1)
    let forInput=String(inputString).slice(0,max+1)
     forInput+=`1/${num}`
     
     forConverted+=(1/num);
    return [forConverted,forInput]
}

function xSquare(inputString,convertedInputString)
{
    let index=[]
    index.push(Number(String(inputString).lastIndexOf("+")))
    index.push(Number(String(inputString).lastIndexOf("-")))
    index.push(mul= Number(String(inputString).lastIndexOf("x")))
    index.push(Number(String(inputString).lastIndexOf("÷"))) 
    let max= index.reduce((accumulator,element)=> {return Math.max(accumulator,element)} )
    
    let num= String(inputString).slice(max+1)
    let  forConverted=String(convertedInputString).slice(0,max+1)
    let forInput=String(inputString).slice(0,max+1)
     forInput+=`${num}^${2}`
     forConverted+=Math.pow(num,2);
    return [forConverted,forInput]
}

function squareRootX(inputString,convertedInputString)
{
    let index=[]
    index.push(Number(String(inputString).lastIndexOf("+")))
    index.push(Number(String(inputString).lastIndexOf("-")))
    index.push(mul= Number(String(inputString).lastIndexOf("x")))
    index.push(Number(String(inputString).lastIndexOf("÷"))) 
    let max= index.reduce((accumulator,element)=> {return Math.max(accumulator,element)} )
    let num= String(inputString).slice(max+1)
    let  forConverted=String(convertedInputString).slice(0,max+1)
    let forInput=String(inputString).slice(0,max+1)
     forInput+=`√(${num})`;
     forConverted+=Math.sqrt(num);
    return [forConverted,forInput]
}

function percentx(inputString,convertedInputString)
{
    let index=[]
    index.push(Number(String(inputString).lastIndexOf("+")))
    index.push(Number(String(inputString).lastIndexOf("-")))
    index.push(mul= Number(String(inputString).lastIndexOf("x")))
    index.push(Number(String(inputString).lastIndexOf("÷"))) 
    let max= index.reduce((accumulator,element)=> {return Math.max(accumulator,element)} )
    
    let num= String(inputString).slice(max+1)
    let  forConverted=String(convertedInputString).slice(0,max+1)
    let forInput=String(inputString).slice(0,max+1)
     forInput+=`(${num})%`;
     forConverted+=((num)/100);
    
    return [forConverted,forInput]
}

function pi(inputString)
{
    let index=[]
    index.push(Number(String(inputString).lastIndexOf("+")))
    index.push(Number(String(inputString).lastIndexOf("-")))
    index.push(mul= Number(String(inputString).lastIndexOf("*")))
    index.push(Number(String(inputString).lastIndexOf("/"))) 
    let max= index.reduce((accumulator,element)=> {return Math.max(accumulator,element)} )
    
    let num= String(inputString).slice(max+1)
    let  forConverted=String(inputString).slice(0,max+1)
    let forInput=forConverted;
     forInput+=`⊼`;
     forConverted+=((3.14159));
    return [forConverted,forInput]
}
const mini=document.getElementById("topContainer");
function minimize()
{
    mini.style.maxHeight='40rem'
   
}
const hist=document.getElementById("history")
const mem=document.getElementById("memory")
let memIsActive=false;
let hisIsActive=false;
function history()
{
  if(!hisIsActive)
  { mem.style.textDecoration='none';
    hist.style.textDecoration='underline'
    hist.style.textDecorationThickness="4px"
    hist.style.textDecorationColor='blue';
    hist.style.textUnderlineOffset="10px"
    hisIsActive=true;
  }
  else
  { 
    hist.style.textDecoration='none'
    mem.style.textDecoration='underline';
    mem.style.textDecorationColor='blue';
    mem.style.textDecorationThickness="4px"
    mem.style.textUnderlineOffset="10px";
    hisIsActive=false;
  }
}

const burgerMenu=document.getElementById("burgerMenu");
const option=document.getElementById("option")
option.style.visibility="hidden"
burgerMenu.addEventListener("click",()=>
{
     if(option.style.visibility==="hidden")
     {
        option.style.visibility="visible"
        burgerMenu.textContent="×"
     }
     else
     {
        option.style.visibility="hidden"
        burgerMenu.textContent="≡"
     }
       
}
)

const standard=document.getElementById("standard")
standard.style.backgroundColor="hsl(0, 0%, 87%)"
standard.style.borderLeft="solid 2px rgb(9, 70, 236)"
standard.style.borderRight="solid 2px rgb(9, 70, 236)"
standard.style.borderTopLeftRadius="2rem"
standard.style.borderBottomRightRadius="2rem"







