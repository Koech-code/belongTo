function getIndexToIns(arr, num) {
    let belong=0;
  
    for (let i=0; i<arr.length; i++){
    // console.log(arr[i]);
    if (arr[i]<num){
    belong ++;
    
   }
   
  }
  return belong;
  
}

let res=getIndexToIns([585, 45857494, 45406979575, 797760785720284, 565, 5665], 565);
console.log(res);