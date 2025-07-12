for (let i = 1; i <= 15; i++) {
  if(i % 5 === 0) {
    console.log(`${i} - ASAP Frontend`); 
  } else if (i % 2 === 1) {
    console.log(`${i} - ASAP`);
    
  } else if (i % 2 === 0) {
    console.log(`${i} - Frontend`);    
  }
}