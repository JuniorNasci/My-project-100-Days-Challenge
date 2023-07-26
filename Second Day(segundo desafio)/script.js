let contador = 0;

const linhaOne = document.querySelector(".line__one")




 function tocaAnimacao(){
   
     contador += 1;
     if (contador == 1){
       document.querySelector(".line__one").style = 'animation: line__one__animation 0.5s ease-in-out forwards;'
       document.querySelector(".line__two").style = 'animation: line__two__animation 0.5s ease-in-out forwards;'
        document.querySelector(".line__three").style = 'animation: line__three__animation 0.5s ease-in-out forwards;'
    }else{
        document.querySelector(".line__one").style = 'animation: line__one__animation__back 0.5s ease-in-out forwards;'
         document.querySelector(".line__two").style = 'animation: line__two__animation__back 0.5s ease-in-out forwards;'
        document.querySelector(".line__three").style = 'animation: line__three__animation__back 0.5s ease-in-out forwards;'
         contador = 0;
     }
}