// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const finAdvisor = Object.create(null, {
    // Company (enumerable, writable, property)
    company:{
        value:"Slytherin Acquisitions",
        enumerable:true,
        writable:true
    },
    // Specialty (enumerable, writable, property)
    specialty:{
        value:"Financials",
        enumerable:true,
        writable:true
    },
    // Name (enumerable, property)
    name:{
        value:"Salazar",
        enumerable:true
    },
    // Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
    portfolio:{
        value:[{
            name:"INTC",
            price : 54,
            volume : 200,
            transaction :"buy"
    }],
        writable:true
        
    },
    // Worth (non-enumerable, method)
    worth:{
        value:function(){  
            let holding =finAdvisor.portfolio.map(hold=>{
                return finAdvisor.portfolio.price;
            })
        }   
    },
    // Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    purchase:{
        value:function(ticker,priceP,volumeP,transactionP){
            const purchObject = {name:ticker,price:priceP,volume:volumeP,transaction:transactionP};
            finAdvisor.portfolio.push(purchObject)
        }
    },
    // Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    sell:{
        value:function(ticker,priceS,volumeS,transactionS){
            const sellObject ={name:ticker,price:priceS,volume:volumeS,transaction:transactionS}
            finAdvisor.portfolio.push(sellObject);
        }
    }
})

// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

// console.log(finAdvisor.portfolio[0].name)
finAdvisor.purchase("NVDA",262,100,"buy")
// console.log(finAdvisor.portfolio[1].price)
finAdvisor.sell("AMD",15,100,"sell")
finAdvisor.sell("QCOM",16,100,"sell")
console.log("complete Port",finAdvisor.portfolio)

//filter for buy or sell
let holding =finAdvisor.portfolio.filter(hold=>{
    const assets = ( finAdvisor.portfolio.transaction === "buy");
    console.log( "holding",hold.transaction)
    console.log("hold",hold)
    console.log("assets",assets)
    return finAdvisor.portfolio.transaction;
})

console.log("holding",holding)
console.log(finAdvisor.portfolio[0].transaction)
//multiply price x volume for each object ie one for buys and one for sell

//reduce objects
//buy - sell = networth