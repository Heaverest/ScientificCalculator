let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');
//console.log(screen);

function btnClick(e){
      btnTxt=e.target.innerText;//value of event i.e 4
      
      switch(btnTxt){
            case "x":
                  btnTxt='*';
            break;
            
            case "/":
                  btnTxt="/";
            break;
            case "+":
                  btnTxt="+";
            break; 
            case ")":
                  btnTxt=")";
            break;
            case "(":
                  btnTxt="(";
            break;
            case "pi":
                  btnTxt="3.142";
            break;
            case "e":
                  btnTxt="2.7182";
            break;

      }
      screen.value+=btnTxt; 
}
function sin(){
     return screen.value=Math.sin(screen.value*Math.PI/180);
}
function cos(){
      return screen.value=Math.cos(screen.value*Math.PI/180);
}
function log(){
      return screen.value=Math.log(screen.value*Math.PI/180);
}
function tan(){
      return screen.value=Math.tan(screen.value*Math.PI/180);
}
function backSpace(){
     return screen.value=screen.value.substr(0,screen.value.length-1);
}
function clrScr(){
      return screen.value='';
}
function sqrt(){
      return screen.value=Math.sqrt(screen.value);
}
function power(){
      return screen.value=Math.pow(screen.value, 2);
}
function fact(){
     let i,num,f;
     f=1
     num=screen.value;
     for(i=1;i<=num;i++){
           f=f*i;
     }
     i=i-1;

     screen.value=f;
}

for(i=0; i<btn.length; i++){
      btn[i].addEventListener('click',btnClick );      
}

 
