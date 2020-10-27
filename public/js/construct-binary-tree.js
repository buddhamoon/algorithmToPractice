class AddNode {
    constructor ( value ) {
        if ( !value ) return;
        this.value = value;
        this.left = null;
        this.right = null;
    }

    conNode ( valOne, valTwo ) {
        if ( !valOne ) return;
        if ( !this.left )  { 
            this.left = valOne;
        } 
        if ( !this.right ) { 
            this.right = valTwo;
        }
    }
};

function guid() {
    return 'xxxxx-xxxx-xxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

 // 方法 1：
        // 方法思路 ：建立指定的二叉树层级数量，然后使用生存随机节点（主要以节点名称区分）来挂载节点。
        function nodeTree_one ( num ) {
            if ( typeof(num) !== "number" || num < 1) return;
            class NodeAdd {
                constructor ( val ) {
                    this.value = val;
                    this.left = null;
                    this.right = null;
                };

                chlidNode ( val, num, max ) {
                    if ( num > max ) return;
                    // num ++;
                    if ( !val.left ) { 
                        val.left = new NodeAdd(guid())
                    } else { this.chlidNode (val.left, num, max) };
                    if ( !val.right ) { 
                        val.right = new NodeAdd(guid());
                    } else { this.chlidNode (val.right, num, max ) }
                    return val;
                }
            };
            let childLeft, childRight;
            const rootNode = new NodeAdd('root');
            for ( let i = 0; i < num; i ++ ) {
                rootNode.chlidNode( rootNode, i, num );
            };
            return rootNode;
        };


         // 二叉树的深度优先搜索
         function deepSeach ( node, value ) {
            if ( !node || !value ) return;
            if ( node.value == value ) { 
                return true 
            } else { 
                let left = deepSeach ( node.left, value );
                let right = deepSeach ( node.right, value );
                return left || right ? true : false;
            };      
        };

        function nodeTree_two ( num ) {
            // 严谨性校验
            if ( typeof(num) !== "number" ) return;
            // 创建指定数量的节点数组，供连接使用。
            const arr = [];
            for ( let i = 1; i < num + 1; i ++) {
                arr.push ( new AddNode (i) );
            };
            // 利用循环将 num 的节点树全部挂载到二叉树的左右树上去
            for ( let i = 0; i < arr.length; i++ ) {
                // 每一次循环都针对 1 个元素进行遍历查看，直刀查看到后面两个连续的节点没有出现在当前的二叉树上时，统一传入，挂载到左右。
                // 当识别到下面的某个节点左右已经挂载 ，则跳到下一个节点 ，找到两个连续的没有存在于节点树上的节点挂到左右上去。
                let nowNum = i + 1;
                while ( deepSeach (arr[0] , nowNum) && deepSeach (arr[0] , nowNum + 1) ) { nowNum ++ };
                arr[i].conNode( arr[nowNum] , arr[nowNum + 1] );
            };
            return arr[0];
        };