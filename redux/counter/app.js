function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    }
    else if (action.type === 'DECREMENT') {
        return state - action.amount
    }
    else { return state; }
}

const incrementAction = {
    type: 'INCREMENT',
    amount: 7
};
const decrementAction = {
    type: 'DECREMENT',
    amount: 3
}

console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));

const unknownAction = { type: 'UNKNOWN' };
console.log(reducer(5, decrementAction));
console.log(reducer(8, unknownAction)); 