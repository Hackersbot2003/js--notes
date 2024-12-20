//-----------REDUCE------
const mynums = [1,2,3]

const myTotal = mynums.reduce(function(accumulator,currentvalue){
    console.log(`accumulator:${accumulator} and currentvalue :${currentvalue}`);
    
    return accumulator+currentvalue
},0                                     //initial value as 0
)
console.log(myTotal);

// accumulator:0 and currentvalue :1
// accumulator:1 and currentvalue :2
// accumulator:3 and currentvalue :3
// 6


//writing in arrow function
const myTotal1= mynums.reduce((acc,cuur)=>acc+cuur,0)
console.log(myTotal);

const shoppingcart = [
    {itemname:"webd",
    price:100
    },
    {itemname:"canva",
    price:50
    },
    {itemname:"mobile",
    price:200
    },
    {itemname:"dsa",
    price:1000
    },
]

const pricePay=shoppingcart.reduce((acc,item)=> acc + item.price,0)
console.log(pricePay);
