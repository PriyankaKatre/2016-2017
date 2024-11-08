function Piggybank()
{
    var obj = {
        balance: 0,
        lt: 0,
        deposit: function(v)
{
    this.balance = this.balance + v;
    this.lt = v;
},
        withdraw: function(v)
{
    if (this.balance >= v)
    {
        this.balance = this.balance - v;
        this.lt = -v;
    }
},

        statement: function()
{
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
}
    };
    return obj;
}


var pg1 = Piggybank();

pg1.deposit(100);
pg1.statement();
pg1.withdraw(50);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

var pg2 = Piggybank();

pg2.deposit(200);
pg2.statement();
pg2.withdraw(100);
pg2.statement();
pg2.withdraw(50);
pg2.statement();


var pg3 = Piggybank();

pg3.deposit(300);
pg3.statement();
pg3.withdraw(200);
pg3.statement();
pg3.withdraw(100);
pg3.statement();