[...urlParsed.searchParams].reduce((cur,[key,value])=>{
  console.log(cur,999)
  console.log([key,value],777)
  console.log(cur[key],value,666)
  console.log(cur,555)
  return ((cur[key] = value), cur)
})