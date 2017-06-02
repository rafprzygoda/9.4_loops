var star = "";
var loop = prompt('podaj ilość poziomów choinki');
function drawTree(){
    for (var i = 0; i < loop; i++) {
        star +='*'; 
        console.log(star);
    }
}

drawTree(loop);
    




