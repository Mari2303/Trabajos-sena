let bingo=[];
let interacion1;
let interacion2;
let contador=0;
let tabla;


for(interacion1 = 0; interacion1<5; interacion1 ++){
    let interno=[];
    for(interacion2 = 0; interacion2 < 5; interacion2 ++){
        contador=contador + 1;
        tabla = contador*2;
        interno.push(tabla);
        
    }
    bingo.push(interno);

    console.log(bingo);

for(interacion1 = 0; interacion2<5; interacion1 ++){
    for( interacion2 = 0; interacion2< 5; interacion2 ++){
        console.log(bingo[ interacion1][interacion2]+"");

    }
    console.log("\n");
}

// lista B
console.log("lectra B \n");
for(interacion2 = 0; interacion2< 5; interacion2 ++){
    console.log(bingo[interacion2][0]+"");
    
}
// lista I 
console.log("lectra I \n")
for(interacion2 = 0; interacion2< 5; interacion2 ++){
    console.log(bingo[interacion2][1]+"");
}
// lista N 
console.log("lectra N \n")
for (interacion2 = 0; interacion2< 5; interacion2 ++){
    console.log(bingo[interacion2][2]+"");
}
// lista G
console.log("lectra G \n")
for (interacion2 = 0; interacion2< 5; interacion2 ++){
    console.log(bingo[interacion2][3]+"");
}
// lista O
console.log("lectra O \n")
for (interacion2 = 0; interacion2< 5; interacion2 ++){
    console.log(bingo[interacion2][4]+"");
}

// primera X
console.log("primera X \n")
for (interacion1 = 0; interacion1 < 3; interacion1 ++){
    for(interacion2 = 0; interacion2 < 3; interacion2 ++){
      if(interacion2%2==0 && interacion1%2==0){
    console.log(bingo[interacion1][interacion2]+"");
      }
 else if(interacion2%2==1 && interacion1%2==1){
    console.log(bingo[interacion1][interacion2]+""); 
 }
 else{
    console.log("");
  }
}
}

// segunda X
console.log("segunda X \n")
for(interacion1= 0; interacion1<3; interacion1 ++){
    for(interacion2=2; interacion2<5; interacion2++){
        if(interacion2%2==0 && interacion1%2==0){
    
        console.log(bingo[interacion1][interacion2]+"");
    }
     else if(interacion2%2==1 && interacion1%2==1){
    console.log(bingo[interacion1][interacion2]);
}
    else{
    console.log("");
}
    }

}

// tercera X 
console.log("tercera X \n")
for(interacion1= 2; interacion1<5; interacion1 ++){
    for(interacion2=1; interacion2<4; interacion2++){
        if(interacion2%2==0 && interacion1%2==1){
    
        console.log(bingo[interacion1][interacion2]+"");
    }
     else if(interacion2%2==1 && interacion1%2==0){
    console.log(bingo[interacion1][interacion2]);
}
    else{
    console.log("");
}
    }

}

//cuarta X
console.log("cuarta X \n ")
for(interacion1= 0; interacion1<5; interacion1 ++){
    for(interacion2=0; interacion2<5; interacion2++){
        if(interacion2==interacion1){
    
        console.log(bingo[interacion1][interacion2]+"");
    }
     else if(interacion2+interacion1==4){
    console.log(bingo[interacion1][interacion2]);
}
    else{
    console.log("");
}
    }

}









