function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide a valid array of numbers.");
        return null;
    }

    return numbers.reduce((accumulator, current) => {
        if (typeof current !== 'number') {
            console.log("Array must contain only numbers.");
            return accumulator; 
        }
        return accumulator + current;
    }, 0);
}


console.log(sumArray([10,27,96,11,20, 30,9,7]));    

