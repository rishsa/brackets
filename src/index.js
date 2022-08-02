module.exports = function check(str, bracketsConfig) {
  // your solution
  openm = []
  closem = []
  for(n in bracketsConfig){
      //openm.push(n+bracketsConfig[n][0])
      openm.push(n)
      openm.push(bracketsConfig[n][0])
      //closem.push(n+bracketsConfig[n][1])
      closem.push(n)
      closem.push(bracketsConfig[n][1])
  }
  //console.log(openm, closem)
  rez = []
  for(s of str) {
      if (rez.length<1 || openm.indexOf(s)>-1) rez.push(s)
      else if (openm.indexOf(rez.at(-1))-1 == closem.indexOf(s)-1) rez.pop()
     //rez.at(-1)
  }
  // your solution
  return (rez.length > 0) ? false : true
}
