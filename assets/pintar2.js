//1

ele = document.getElementById("ele1") 
function pintar(){
    ele.style.backgroundColor = 'yellow'
}
 
ele.addEventListener("click", pintar);

//2

ele = document.getElementById("ele1")
function pintar(color="green") {   
   ele.style.backgroundColor = color
}
ele.addEventListener("click", function(){ pintar('yellow')});

//3

let color = "green";
const colorName = document.getElementById('color');
colorName.innerText = color;
document.addEventListener('keydown', function(e){
    if(e.key ==='a'){
        color = 'green';
    }else if(e.key === 's'){
        color ='orange';
    }else if(e.key === 'd'){
        color = 'blueviolet';
    }else{
        color = 'coral';
    }
    colorName.innerText = color;
});

const colorEvent = function(IdBox){
     document.getElementById(IdBox).addEventListener('click', function(){
         this.style.backgroundColor = color;  
     });
};

colorEvent('box1');
colorEvent('box2');
colorEvent('box3');
colorEvent('box4');





































// let color = " ";
// document.addEventListener('keydown', function(e){

//     let slc = document.getElemenetById("seleccionado")
      
//     switch(e.key.toLowerCase()) {
//          case 'a':
//             slc.innerHTML ='A'
//             slc.style.backgroundColor = 'lightgreen'
//             color = 'lightgreen'
//             break;
//          case 's':
//             slc.innerHTML ='S'
//             slc.style.backgroundColor = 'pink'
//             color:'pink'
//             break;
//          case 'd':
//             slc.innerHTML ='S'
//             slc.style.backgroundColor = 'lightblue'
//             color:'lightblue'
//             break;   
//          case 'f':
//             slc.innerHTML ='F'
//             slc.style.backgroundColor = 'lightgrey'
//             color:'lightgrey'
//             break; 

//        }

// })