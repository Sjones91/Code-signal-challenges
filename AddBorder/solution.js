function solution(picture) {
    let indexHorizontal = 0
    let firstArray = ""
    let lastArray = ""
    let finalArray = []
    //get length of array element
    for(let i = 0; i < picture[0].length; i++) {
        indexHorizontal += 1;
    }
    indexHorizontal += 2;
    //build first & last array based on array length
    for(let i = 0; i < indexHorizontal; i ++) {
        firstArray += "*"
        lastArray += "*"
    }
    //Construct final array for solution
    finalArray.push(firstArray)
    //add asterix to each array element start and end
    for(let i= 0; i< picture.length; i++) {
            let e = `*${picture[i]}*`
            finalArray.push(e) 
        }
    finalArray.push(lastArray)
    //deliver solution
    return finalArray
}
