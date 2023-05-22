var masivi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let indexi = 0;

while(indexi < masivi.length){
    indexi++
    if(masivi[indexi] == 1 || masivi[indexi] == 5 || masivi[indexi] == 9){
        continue;
    }if(indexi > (masivi.length - 1) ){
        break;
    }

    document.write(masivi[indexi] + "<br>");
};
