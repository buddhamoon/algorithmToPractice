    // 注：为了展示函数的独立语义，通用代码暂不做函数抽象。
    /* @double */
    // double 方法 1
    function double_one (arrIn) {

        // 严谨性判断
        if (!arrIn) return [];
        if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
        if (JSON.stringify(arrIn) === '{}') return [];

        // 循环体
        const arrOut = [];
        const len = arrIn.length;
        for (let i = 0; i < len; i++) {
            // 因为缺乏上下文约定，安全起见仅对数组中的数字进行 double 操作
            if (typeof arrIn[i] === "number" ) {
                arrOut.push(arrIn[i] * 2);
            } else {
                arrOut.push(arrIn[i]);
            }
        }
        return arrOut
    }

    // double_one 结果测试。
    const test_double_one = double_one([1,2,3,4,5]);
    console.info('test_double_one',test_double_one);

    // double 方法 2
    // forEach 方法，但实际上 forEach 循环的性能是劣于 for 的。
    function double_two (arrIn) {

        // 严谨性判断
        if (!arrIn) return [];
        if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
        if (JSON.stringify(arrIn) === '{}') return [];

        // 循环体
        const arrOut = [];
        arrIn.forEach( item => {
            if (typeof item === "number" ) {
                arrOut.push(item * 2);
            } else {
                arrOut.push(item);
            }
        });
        return arrOut
    }

    // double_one 结果测试。
    const test_double_two = double_two([1,2,3,4,5]);
    console.info('test_double_two',test_double_two);

    /* @increment */
    // increment 方法 1
    function increment_one (arrIn) {

        // 严谨性判断
        if (!arrIn) return [];
        if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
        if (JSON.stringify(arrIn) === '{}') return [];

        // 循环体
        const arrOut = [];
        const len = arrIn.length;
        for (let i = 0; i < len; i++) {
            // 因为缺乏上下文约定，安全起见仅对数组中的数字进行操作
            if (typeof arrIn[i] === "number") {
                arrOut.push(++arrIn[i]);
            } else {
                arrOut.push(arrIn[i]);
            }
        }
        return arrOut
    }

    // increment_one 结果测试。
    const test_increment_one = increment_one([1,2,3,4,5]);
    console.info('test_increment_one',test_increment_one);

    // increment 方法 2
    // forEach 方法，但实际上 forEach 循环的性能是劣于 for 的。
    function increment_two (arrIn) {

        // 严谨性判断
        if (!arrIn) return [];
        if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
        if (JSON.stringify(arrIn) === '{}') return [];

        // 循环体
        const arrOut = [];
        arrIn.forEach( item => {
            if (typeof item === "number" ){
                arrOut.push( ++item );
            } else {
                arrOut.push( item );
            } 
        });
        return arrOut
    }

    // increment_two 结果测试。
    const test_increment_two = increment_two([1,2,3,4,5]);
    console.info( 'test_increment_two', test_increment_two);

    /* @foo */
    // 合并执行
    function foo_one(arrIn) {
            // 严谨性判断
            if (!arrIn) return [];
            if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
            if (JSON.stringify(arrIn) === '{}') return [];

        return increment_one(double_one(arrIn));
        }

    function foo_two(arrIn) {
        // 严谨性判断
        if (!arrIn) return [];
        if (typeof arrIn === "object" && arrIn.length === 0 ) return [];
        if (JSON.stringify(arrIn) === '{}') return [];

        return increment_two(double_two(arrIn));
        }
        // foo 执行控制台反馈
    const test_foo_one = foo_one([1,2,3,4,5]);
    console.info('test_one',test_foo_one);
    const test_foo_two = foo_two([1,2,3,4,5]);
    console.info('test_two',test_foo_two);