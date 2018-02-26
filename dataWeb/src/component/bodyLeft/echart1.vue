<template>
   <div :class="echart1" class="eee"></div>
   
</template>
<style scoped>
    .eee{
        border-style: solid;
        border-width: 15px 15px 15px;
        border-image-source: url("../../assets/b75ed9d01c82945b8560e6bc4d79feec.png");
        border-image-slice: 26 27 27 fill;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: repeat;
        background: none;
        margin-left: 10px;
        color: #fff;
    }
</style>
<script>
import echart from 'echarts'
import $ from "jquery"
export default {
    props:['type',"echart1"],
    data(){
       return{
           myChart : {},
           screenWidth: document.body.clientWidth,
           timer: false,
           showTime: "",
           currentIndex: -1
       }
    },
    mounted(){
        let dom = document.querySelector("."+this.echart1)
        let winH = $(window).height();
        $("."+this.echart1).css({'height':winH/3+ "px"})
        this.myChart = echart.init(dom);
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth
        }
        this.getData()
        this.timers = setInterval(()=>{
            this.getData()
        }, 12000)      
        // 自适应
    },
    methods:{
        getData(){
         //   this.$http.get('/minsheng-poc-web/system/queryStatisEquipmentFaultDatas', {params: {'orgId' : "1"}}).then((res)=>{ 
            this.$http.get('/datas', {params: {'type' : this.type}}).then((res)=>{       
               
              //  this.myChart.setOption(res.body.result.echart1);
                let option = {}; 
                if(res.body.result === "000"){
                    let titleName = []; // 设备名
                    let faultData = []; //故障数据
                    let faultName = []; // 故障名
                    let colors = []; // 故障颜色
                    for(let [key,value] of res.body.data.equipmentList.entries()){
                        titleName.push(value.equipmentName)
                    }
                    for(let [key,value] of res.body.data.faultData.entries()){
                        if(value.faultType === 1){
                            colors.push("#00FF00")
                        }else if(value.faultType === 2){
                            colors.push("#FF0000")
                        }else if(value.faultType === 3){
                            colors.push("#FFFF00")
                        }
                        faultName.push(value.faultName);
                        faultData.push({
                                "name": value.faultName,
                                "type":"bar",
                                "barWidth" : 10,
                                "data":[]
                            });
                        for(let [i,item] of value.list.entries()){
                            faultData[key].data.push(item.number)
                        }
                    }
                    option = {
                        "color": colors,
                        "tooltip" : {
                            "trigger": "axis",
                            "axisPointer" : {            
                                "type" : "shadow"        
                            }
                        },
                        "legend": {
                            "data": faultName,
                            "textStyle": {
                                "color": "rgb(255, 255, 255)"
                            }
                        },
                        "grid": {
                            "left": "3%",
                            "right": "4%",
                            "bottom": "3%",
                            "containLabel": true
                        },
                        "xAxis" : [
                            {
                                "type" : "category",
                                "data" : titleName,
                                "axisLine":{
                                    "lineStyle":{
                                        "color": "pink"
                                    }
                                }
                            }
                        ],
                        "yAxis" : [
                            {
                                "type" : "value",
                                "axisLine":{
                                    "lineStyle":{
                                        "color": "pink"
                                    }
                                }
                            }
                        ],
                        "series" : faultData,
                        "textStyle": {
                            "color": "rgb(255, 255, 255)"
                        }
                    }
                }else{
                    option = {
                        "tooltip" : {
                            "trigger": "axis",
                            "axisPointer" : {            
                                "type" : "shadow"        
                            }
                        },
                        "legend": {
                            "data":["故障1","故障2","故障3"],
                            "textStyle": {
                                "color": "rgb(255, 255, 255)"
                            }
                        },
                        "grid": {
                            "left": "3%",
                            "right": "4%",
                            "bottom": "3%",
                            "containLabel": true
                        },
                        "xAxis" : [
                            {
                                "type" : "category",
                                "data" : ["POS机","交换机","显示器","服务器","主机","路由器"],
                                "axisLine":{
                                    "lineStyle":{
                                        "color": "pink"
                                    }
                                }
                            }
                        ],
                        "yAxis" : [
                            {
                                "type" : "value",
                                "axisLine":{
                                    "lineStyle":{
                                        "color": "pink"
                                    }
                                }
                            }
                        ],
                        "series" : [
                            {
                                "name":"故障1",
                                "type":"bar",
                                "barWidth" : 10,
                                "data":[320, 332, 501, 334, 390, 330]
                            },
                            {
                                "name":"故障2",
                                "type":"bar",
                                "barWidth" : 10,
                                "stack": "广告",
                                "data":[120, 132, 101, 134, 90, 230]
                            },
                            {
                                "name":"故障3",
                                "type":"bar",
                                "barWidth" : 10,
                                "stack": "广告",
                                "data":[220, 182, 191, 234, 290, 230]
                            }
                        ],
                        "textStyle": {
                            "color": "rgb(255, 255, 255)"
                        }
                    }
                }
               
                if(!this.showTime){
                    this.showTime = setInterval((res)=>{
                        var dataLen = option.series[0].data.length;
                        // 取消之前高亮的图形
                        this.myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: this.currentIndex
                        });
                        this.currentIndex = (this.currentIndex + 1) % dataLen;
                        // 高亮当前图形
                        this.myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: this.currentIndex
                        });
                        // 显示 tooltip
                        this.myChart.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 0,
                            dataIndex: this.currentIndex
                        });
                    }, 3000)
                }
                this.myChart.setOption(option);
                
                
            })
        }
    },
    watch:{
        // 优化处理
        screenWidth(){
            if (!this.timer) {           
                this.timer = true
                setTimeout(() => {
                    this.myChart.resize()
                    this.timer = false
                }, 400)
            } 
        }
    },
    destroyed(){
        clearInterval(this.timers)
    }
}
</script>

