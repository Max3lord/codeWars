// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
    let container = arr1.concat(arr2);
    container = new Set(container);
    container = Array.from(container)
    return container.sort((a, b) => a - b);
}