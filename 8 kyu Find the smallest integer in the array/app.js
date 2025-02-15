function findSmallestInt(arr) {
    //your code here
    const min = arr
    const result = Math.min.apply(null, arr)
    
    return result
   
  }
  findSmallestInt([34, 15, 88, 2])
  findSmallestInt([34, -345, -1, 100])