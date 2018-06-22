// Your job is to create an object that represents a financial advisor and has the following properties and methods.

const finAdvisor = Object.create({}, {
    // Company (enumerable, writable, property)
    company: {
        value: "Slytherin Acquisitions",
        enumerable: true,
        writable: true
    },
    // Specialty (enumerable, writable, property)
    specialty: {
        value: "Financials",
        enumerable: true,
        writable: true
    },
    // Name (enumerable, property)
    name: {
        value: "Salazar",
        enumerable: true
    },
    // Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
    portfolio: {
        value: [{
            name: "INTC",
            price: 54,
            volume: 200,
            transaction: "buy"
        }],
        writable: true,
        enumerable:true
        
    },
    // Worth (non-enumerable, method)
    worth: {
        value: function () {
            //buys
            const holding = finAdvisor.portfolio.filter(hold => hold.transaction === "buy");
                        const assets = holding.map((oneobject)=>{return oneobject.price * oneobject.volume});
                        const assetsTotal = assets.reduce((current,next)=>current + next)
                        console.log("Assets Total", assetsTotal)
                        //sells
                        const sells = finAdvisor.portfolio.filter(sold=> sold.transaction ==="sell")
                        const reductions = sells.map((oneobject)=>{return oneobject.price * oneobject.volume});
                        const reductionTotal = reductions.reduce((current,next)=>current + next)
                        console.log (reductionTotal)
                        //total worth
                        let totalWorth = assetsTotal - reductionTotal
                        console.log(totalWorth)
            
        }
    },
    // Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    purchase: {
        value: function (ticker, priceP, volumeP, transactionP) {
            const purchObject = {
                name: ticker,
                price: priceP,
                volume: volumeP,
                transaction: transactionP
            };
            finAdvisor.portfolio.push(purchObject)
        }
    },
    // Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
    sell: {
        value: function (ticker, priceS, volumeS, transactionS) {
            const sellObject = {
                name: ticker,
                price: priceS,
                volume: volumeS,
                transaction: transactionS
            }
            finAdvisor.portfolio.push(sellObject);
        }
    }
})

// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

// console.log(finAdvisor.portfolio[0].name)
finAdvisor.purchase("NVDA", 262, 100, "buy")
// console.log(finAdvisor.portfolio[1].price)
finAdvisor.sell("AMD", 15, 100, "sell")
finAdvisor.sell("QCOM", 16, 100, "sell")
console.log("complete Port", finAdvisor.portfolio);


//filter for buy or sell
// hold.transaction === "buy";
// console.log(hold.transaction === "buy")
// console.log("hold", hold)
// console.log(hold.transaction)






//multiply price x volume for each object ie one for buys and one for sell

//reduce objects
//buy - sell = networth