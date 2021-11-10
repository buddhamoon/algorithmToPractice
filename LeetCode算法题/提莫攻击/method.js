/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了89.25%的用户
 * 内存消耗：41.8 MB, 在所有 JavaScript 提交中击败了55.11%的用户
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    // second 中毒的时间（秒）
    // state 上一次中毒在哪一秒结束
    const len = timeSeries.length;
    let second = 0, state = 0;
    for ( let i = 0; i < len; i++ ){

        if (!state) {
            // initialization
            state += timeSeries[i] + duration - 1;
            second += duration;
            continue;
        };
        // 当前时间小于或等于上一次（如果没有必要则不需要）
        // if ( timeSeries[i] <= timeSeries[i-1] ) continue;

        if ( timeSeries[i] > state ) {
            state = timeSeries[i] + duration - 1;
            second += duration;
        } else {
            state += timeSeries[i] - timeSeries[i-1];
            second += timeSeries[i] - timeSeries[i-1];
        }
        
    }  
   return second;
};