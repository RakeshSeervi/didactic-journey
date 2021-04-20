function pairwise(arr, arg) {
  let ans = 0;
  let visited = Array(arr.length);

  for(let i=0; i<arr.length; i++){
    let target = arg-arr[i];
    for(let j=i+1; j<arr.length && visited[i]!=1; j++){
      if(target==arr[j] && visited[j]!=1){
        ans+=i+j;
        visited[j] = 1;
        break;
      }
    }
  }
  
  return ans;
}

pairwise([1, 1, 1], 2);
