const title_dialog = document.querySelector(".title-dialogo");
const dialogo = document.querySelector(".dialogo");
const img_cat = document.querySelector(".img-cat");
let contador = 0;

document.getElementById("si").addEventListener("click", function(){
    title_dialog.textContent = "Wuuu! Sabía que dirías que sí."
    dialogo.textContent = "Yo también te amo, amorcito. <3";
    img_cat.src = 'img/default.jpg';
});

document.getElementById("no").addEventListener("click", function(){
    contador = contador + 1;
    console.log(contador);
    if(contador < 5){
        img_cat.src = 'img/'+contador+'.jpg';
    }
    switch(contador){
        case 1:
            dialogo.textContent = "Tal vez apretaste mal... elige otra vez.";
            break;
        case 2:
            dialogo.textContent = "Ándale, di que sí, por favorcito.";
            break;
        case 3:
            dialogo.textContent = "Ya hiciste llorar al gato :( di que sí, ándale.";
            break;
        case 4:
            dialogo.textContent = "Cada vez que dices que no, un gato en alguna parte del mundo muere :(";
            break;
        case 5:
            dialogo.textContent = "Felicidades, ya eres una asesina de gatitos :(";
            break;
        default:
            dialogo.textContent = "Llevas asesinados "+ contador +' gatitos.';
            break;
    }
    
});