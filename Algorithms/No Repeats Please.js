let permutationArr = [];

function permutations(s, sp) {
  if (s == "")
    permutationArr.push(sp);
  else
    for (let i = 0; i < s.length; i++)
      permutations(s.substr(0, i) + s.substr(i + 1), sp + s[i]);
}

function permAlone(str) {
  let ans = 0;
  permutationArr = [];
  permutations(str, "");
  for(let w of permutationArr){
    let flag = 0;
    for(let i=1; i<w.length; i++)
      if(w[i]==w[i-1]){
        flag = 1;
        break;
      }
    if(flag==0)
      ans+=1;
  }
  return ans;
}

permAlone('abcdefa');
