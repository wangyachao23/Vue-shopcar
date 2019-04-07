var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iPhone 8',
                price:8888,
                count:1
            },
            {
                id:2,
                name:'Huwei Mate10',
                price:6666,
                count:1
            },
            {
                id:3,
                name:'Lenovo',
                price:6588,
                count:1
            }
        ],
        selectList:[],
        checked:false
    },
    computed:{
        totalPrice:function(){
            var total = 0;
            for(var i = 0,len = this.selectList.length;i < len;i++){
                var index = this.selectList[i];
                var item = this.list[index];
                if(item){
                    total += item.price * item.count;
                }
                else{
                    continue;
                }

            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods:{
        handleReduce:function(index){
            var item = this.list[index];
            if(item.count < 2){
                return;
            }
            item.count--;
        },
        handleAdd:function(index){
            var item = this.list[index];
            item.count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        swapCheck:function(){

            var selectList = document.getElementsByName('selectList');
            var len = selectList.length;
            if(this.checked){
               for(var i = 0;i < len;i++){
                    var item = selectList[i];
                    item.checked = false;
                }
                this.checked = false;
                this.selectList = [];
            }
            else{
                for(i = 0;i < len;i++){
                    item = selectList[i];
                    if(item.checked === false){
                        item.checked = true;
                        this.selectList.push(selectList[i].value);
                    }
                }
                this.checked = true;

            }
        }
    }
});