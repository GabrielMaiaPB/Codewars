function getAverage(marks){
    let sumOfMarks = 0
    let average
    for(let i=0; i<=marks.length-1; i++){
      sumOfMarks += marks[i]
    }
    average = sumOfMarks / marks.length
    return Math.floor(average)
  }