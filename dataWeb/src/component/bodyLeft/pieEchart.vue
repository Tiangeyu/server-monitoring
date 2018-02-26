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
        margin-right: 10px;
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
           bingData: "",
           count: 0,
           showTime: "",
           currentIndex: -1
       }
    },
    mounted(){
        let dom = document.querySelector("."+this.echart1)
        let winH = $(window).height();
        $("."+this.echart1).css('height',winH/3+ "px")
        this.myChart = echart.init(dom);
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth
        }
        this.getData();
        // this.animatesEffect = setInterval(()=>{
        //     let len = this.bingData.series[0].data.length;
        //     let r = this.count % len;
        //     this.bingData.series[0].data[r].selected = false;
        //     this.count++;
        //     let s = this.count % len;
        //     this.bingData.series[0].data[s].selected = true;
        //     this.myChart.setOption(this.bingData, true);
        // }, 1000)
        this.timers = setInterval(()=>{
        //     clearInterval(this.animatesEffect)
        //     this.count = 0;
        //     this.animatesEffect = setInterval(()=>{
        //         let len = this.bingData.series[0].data.length;
        //         let r = this.count % len;
        //         this.bingData.series[0].data[r].selected = false;
        //         this.count++;
        //         let s = this.count % len;
        //         this.bingData.series[0].data[s].selected = true;
        //         this.myChart.setOption(this.bingData, true);
        //     }, 1000)
            this.getData()
        }, 12000)      
        // 自适应
    },
    methods:{
        getData(){
            this.$http.get('/datas', {params: {'type' : this.type}}).then((res)=>{  
        //   this.$http.get('/minsheng-poc-web/system/queryStatisFaultDatas', {params: {'orgId' : 1}}).then((res)=>{    
                let data = [];
                 for(let [key, value] of res.body.result.data.entries()){
            //   for(let [key, value] of res.body.data.entries()){
                     data.push({"value":value.value, "name": value.name})
                }
                let options = {
                    "title" : {
                        "text": "",
                        "subtext": "设备故障统计图",
                        "x":"center"
                    },
                    "tooltip" : {
                        "trigger": "item",
                        "formatter": "{a} <br/>{b} : {c} ({d}%)"
                    },
                    "series" : [
                        {
                            "name": "占比",
                            "type": "pie",
                            "radius" : "55%",
                            "center": ["50%", "60%"],
                            "data":data,
                            "itemStyle": {
                                "emphasis": {
                                    "shadowBlur": 10,
                                    "shadowOffsetX": 0,
                                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                                }
                            }
                        }
                    ]   
                }
                if(!this.showTime){
                    this.showTime = setInterval((res)=>{
                        var dataLen = options.series[0].data.length;
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
                    }, 2000)
                }
                this.myChart.setOption(options);
                // this.bingData = options;
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

