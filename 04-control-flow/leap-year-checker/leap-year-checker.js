const year = 2024;


if(year % 400 === 0 ){
  console.log(`${year} is Leap Year`)
}

else if(year % 100 === 0){
  console.log(`${year} is Not Leap Year`)
}


else if ( year % 4 === 0 ){
  console.log(`${year} is Leap Year`);
}

else {
  console.log(`${year} is Not Leap Year`);
}
