/*
* @var number checkNum 调用次数
* @var number cookieTime 初始时间值ms
* @params function query 递减调用次数
* @params function testCallBack 最后执行的调用函数
*/
 let checkNum = 5;
 let cookieTime = 1000;

 function query () {
     if ( checkNum > 0 ) {
         checkNum --;
         return false;
     } else {
         return true;
     }
 }

 function testCallBack () {
     console.info('回调函数调用成功！');
 }

 function simplePoller ( queryFn, callback ) {
     const state = queryFn();
     console.info(cookieTime)
     setTimeout( () => {
         if (!state) {
             cookieTime = cookieTime * 1.5;
             simplePoller( query, testCallBack );
         } else {
             callback();
         }
         return state;
     }, cookieTime);
     
 }

 simplePoller( query, testCallBack );

 /*类封装写法*/
 class SimplePoller {
     constructor ( num = 5, time = 1000 ) {
         this.num = num;
         this.time = time;
     }

     query () {
         if ( this.num > 0 ) {
             this.num --;
             return false;
         } else {
             return true;
         }
     }

     testCallBack () {
         console.info('回调函数调用成功！类封装');
     }

     // 无参数实例自调用方法
     simplePoller_NoParams ( ) {
         const state = this.query();
         console.info(this.time)
         setTimeout( () => {
             if (!state) {
                 this.time = this.time * 1.5;
                 this.simplePoller_NoParams();
             } else {
                 this.testCallBack();
             }
             return state;
         }, this.time);  
     }

     // 有参数实例自调用
     // 设置了默认参数以方便测试，防止this丢失bind
     simplePoller_Params ( queryFn = this.query.bind(this), callback = this.testCallBack ) {
         const state = queryFn();
         console.info(this.time)
         setTimeout( () => {
             if (!state) {
                 this.time = this.time * 1.5;
                 this.simplePoller_Params( query, testCallBack );
             } else {
                 callback();
             }
             return state;
         }, this.time);
         
     }
 }

 const test_one = new SimplePoller();
 test_one.simplePoller_NoParams();

 const test_two = new SimplePoller();
 test_two.simplePoller_Params();