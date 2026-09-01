// Pattern 01 : Square 

for(let a = 1; a <= 4; a++){
  let row = ""
  for(let b = 1; b <= 4; b++){
    row += "*"
  }
  console.log(row);
}



// Pattern 02 : increasing Triangle

for( let c = 1; c<=4; c++){
  let newrow = ""
  for(let d = 1; d<=c; d++){
    newrow += "*"
  }
  console.log(newrow);
} 


//Pattern 03 : Decreasing Triangle

for(let e = 4; e>=1; e--){
  let newrow2 = ""
  for(let f = 1; f<=e; f++){
    newrow2 += "*"
  }
  console.log(newrow2)
}

// Pattern 04 : Number Triangle 

  for(let g = 1; g<=4; g++){
    let newrow3 = ""
    for(let h = 1; h<=g; h++){
      newrow3 += h;
    }
    console.log(newrow3)
  }


// Patterb 05 : Same Number Triangle 

for (let i = 1; i<=4; i++){
  let newrow4 = ""
  for(let j = 1; j<=i; j++){
    newrow4 += i
  }
  console.log(newrow4)
}


// Pattern 06 : Reverse Number Triangle

for(let k = 4; k>=1; k--){
  let newrow5 = ""
  for(let l = 1; l<=k; l++){
    newrow5 += l
  }
  console.log(newrow5)
}



// Pattern 07 : Increasing Number 

let count = 1; 

for(let a = 1; a <=4; a++){
  let newrow6 = ""
  for(let b = 1; b<=a; b++){
    newrow6 += count++
  }
  console.log(newrow6)
}


// Pattern 08 : Right Aligned Triangle

let space1 = 4;
for(let a = 1; a<=4; a++ ){
  let newrow7 = ""
  for(let b = 1; b<=space1-a; b++){
    newrow7+=" "
  }
  for(let c = 1; c<=a; c++){
    newrow7+="*"
  }
  console.log(newrow7)
}


// Pattern 09 : Pyramid Pattern 

let space2 = 4;

for(let a = 1; a<=4; a++){
  let newrow8 = "";

  for(let b = 1; b<=space2-a; b++){
    newrow8 +=" "
  }
  for(let c = 1; c<=2 * a-1; c++){
    newrow8 +="*"
  }
  console.log(newrow8)
}




// Pattern 10 : Reverse Pyramid

let space3 = 4; 

for( let a = 4; a>=1; a--){
  let newrow9 = ""

  for(let b = 1; b<=space3-a; b++){
    newrow9 += " " 
  }
  
  for(let c = 1; c<=(2*a)-1; c++){
    newrow9 += "*"
  }
  console.log(newrow9)
}

