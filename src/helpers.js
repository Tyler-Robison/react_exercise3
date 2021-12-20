function choice(arr) {
    const randIdx = Math.floor(Math.random() * arr.length)
    return arr[randIdx]
}

// returns undefined if no match
function remove(arr, item) {
    console.log('item', item)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1)
            return arr
        }
    }
}

export { choice, remove };