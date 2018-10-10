const Lottery = require('./lottery');
let v = new Lottery();

for(let i=0; i<5;i++){
    const voter_id = v.voterId();
    const product_id = v.productId();
    for(let j=0;j<i;j++){
        const lottery_num = v.lotteryNum();
        v.bark(voter_id,product_id,lottery_num);
    }
}