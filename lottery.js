const NodeUuid = require('node-uuid');

class Lottery extends NodeUuid {

    voterId() {
        return NodeUuid.v4().split('-').join('').slice(0, 16);
    }

    productId() {
        return ~~(Math.random() * 5) + 1;
    }

    lotteryNum() {
        return ~~(Math.random() * 10000) + 1;
    }

    bark(voter_id,product_id,lottery_num){
        console.log(`('${voter_id}', ${product_id}, '${lottery_num}'),`); //=>('92d054e6f9ed4269', 47ef9c3a0de54b6e, '3923')
    }
}
module.exports = Lottery;