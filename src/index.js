module.exports = function check(str, bracketsConfig) {
  // your solution
  openm = []
  closem = []
  for(n in bracketsConfig){
      openm.push(n)
      openm.push(bracketsConfig[n][0])
      closem.push(n)
      closem.push(bracketsConfig[n][1])
  }
  rez = []
  for(s of str) {
      if (rez.length<1) {rez.push(s); continue}
      if (openm.indexOf(rez.at(-1))-1 == closem.indexOf(s)-1 && closem.indexOf(s)>-1) rez.pop()
      else rez.push(s)
  }
  return (rez.length > 0) ? false : true
}
