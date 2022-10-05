class CodeFun {
    constructor () {

    }
    /**
     * 多次调用成功率判断函数
     * @param { number } num 计算次数
     * @param { number } probability 约定计算成功率 1 ~ 100
     * @returns 
     */
    async loopCall ( num, probability ) {
        const errMessage = { success : false , errorMessage : "参数错误" };
        if ( typeof num !== 'number' ) return errMessage;
        if ( typeof probability !== 'number' ) return errMessage;
        const res = {
            success : true,
            result : {
                successCount : 0,
                failureCount : 0,
                successRate : 0
            }
        };
        // 循环调用成功率判断函数
        for ( let i = 0; i < num; i++ ) {
            const judge = await this.successRate(probability);
            if (!!judge.success) {
                if ( !!judge.result ) {
                    res['result']['successCount'] ++;
                } else {
                    res['result']['failureCount'] ++;
                }
            }
        }
        // 计算成功率
        res['result']['successRate'] = res['result']['successCount'] /  num * 100;
        return res;
    }

    /**
     * 概率判断函数
     * @param { number } probability 约定计算成功率 1 ~ 100
     * @returns { object } 
     */
    async successRate (probability) {
        if ( typeof probability !== 'number' ) return { success : false , errorMessage : "参数错误" };
        if ( (probability < 0) || (probability > 100) ) return { success : false , errorMessage : "概率值超出范围" };
        const value = Math.floor(Math.random() * 100 );
        if ( value <= probability ) {
            return { success : true, result : true };
        } else {
            return { success : true, result : false };
        }
    }
}


export default CodeFun;
