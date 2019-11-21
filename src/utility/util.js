
const Utils = (() => {
    return {
        shuffleArray(arr) {
            let newArray = []
            while (arr.length >= 1) {
                let randomNumber = Math.floor(Math.random() * arr.length);
                newArray.push(arr[randomNumber]);
                arr[randomNumber] = arr[arr.length - 1];
                arr.pop();
            }
            return newArray;
        },

        expiryDate(year) {
            let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            let date = new Date()
            let expiryDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear() + year}`
            return expiryDate
        },

        filterArray(arrays, arrayClicked, valueToRemove) {
            arrays[arrayClicked].filter(function (item) {
                return item !== valueToRemove
            })
        }
    }
})();



export default Utils;