/**
 * 祖玛游戏
 */

const testArray = [
    { board : 'WRRBBW', hand : 'RB', expect : -1 },
    { board : 'WWRRBBWW', hand : 'WRBRW', expect : 2 },
    { board : 'G', hand : 'GGGGG', expect : 2 },
    { board : 'RBYYBBRRB', hand : 'YRBGB', expect : 3 },
];

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
 var findMinStep = function(board, hand) {

    const hashHand = hand.strToHash();

    // 筛选掉因为球不够导致不可能完全消除的情况
    const hashBoard = board.strToHash();
    for ( let i in hashBoard ){
        if ( (hashBoard[i] + hashHand[i] || 0) < 3 ) return -1;
    }

    // 处理球足够的消除算法


};

String.prototype.strToHash = function () {
    const obj = {};
    for ( let i = 0; i < this.length; i++ ) {
        if ( this[i] in obj ){
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }
    return obj;
}

String.prototype.clearMeet = function () {
    let str = '', cache = '';
    for ( let i = 0; i < this.length; i++ ){
        
    }
}


