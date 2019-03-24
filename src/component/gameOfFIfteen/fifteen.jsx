import React, { Component } from "react";
import Utils from '../../utility/util'
import '../../styles/gameOfFifteen.css'

class Fifteen extends Component {
    state = {
        array: Utils.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
        decison: ""


    }
    // to add 0 at the end so it doesn't shuffle
    componentDidMount() {
        let newArray = this.state.array
        newArray.push(0)
        this.setState({ array: newArray })

    }
    // checking to see if  number  is next to 0
    changeNumber(key) {
        let arr = this.state.array

        if (arr[key - 1] === 0 && key % 4 !== 0) {
            [arr[key], arr[key - 1]] = [arr[key - 1], arr[key]]
        }
        if (arr[key + 1] === 0 && key % 4 !== 3) {
            [arr[key], arr[key + 1]] = [arr[key + 1], arr[key]]
        }
        if (arr[key - 4] === 0) {
            [arr[key], arr[key - 4]] = [arr[key - 4], arr[key]]
        }
        if (arr[key + 4] === 0) {
            [arr[key], arr[key + 4]] = [arr[key + 4], arr[key]]
        }

        let checkArray = arr.slice(0, arr.length - 1)

        // Check if all the logic return true
        let value = checkArray.every((number, key) => {

            return key + 1 === number
        })
        this.setState({ array: arr })
        value ? this.setState({ decison: "You Won" }) : this.setState({ array: arr })

    }


    render() {


        return (
            <div id="main">
                < p><a href="https://github.com/PunyaChapagain/react-project.git" target="blank">Github </a></p>

                <h1> Game of Fifteen</h1>
                <h1>{this.state.decison}</h1>
                <div className="container1">

                    {
                        this.state.array.map((number, key) => {

                            return <li key={key} onClick={() => this.changeNumber(key)} className={`num num${number}`} > {number}</li>
                        })
                    }

                </div>
            </div>

        )
    }
}

export default Fifteen;