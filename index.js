let array = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]

function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while (firstHalf.length !=0 && secondHalf.length !=0){
        if (firstHalf[0] < secondHalf[0]){
            sorted.push(findMinAndRemoveSorted(firstHalf))
        } else {
            sorted.push(findMinAndRemoveSorted(secondHalf))
        }
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted

    if (array.length < 2){
        return sorted
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
    // console.log(sorted)
}

mergeSort(array)
