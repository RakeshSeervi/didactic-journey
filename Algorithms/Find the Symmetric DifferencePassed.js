function sym(args, ...vargs) {
  let ans = new Set(args);

  for(let arr of vargs){
    let s = new Set(arr);
    for(let ele of s){
      if(ans.has(ele))
        ans.delete(ele);
      else
        ans.add(ele);
    }
  }

  return Array.from(ans);
}

sym([1, 2, 3], [5, 2, 1, 4]);
