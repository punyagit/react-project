
const Utils = (function () {
    return {
        shuffleArray: function (arr) {
            let newArray = []

            while (arr.length >= 1) {
                let randomNumber = Math.floor(Math.random() * arr.length);
                newArray.push(arr[randomNumber])
                arr[randomNumber] = arr[arr.length - 1]



                arr.pop();
            }
            return newArray

        }

    }


})();



export default Utils;