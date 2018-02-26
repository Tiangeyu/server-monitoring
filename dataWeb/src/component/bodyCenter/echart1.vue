<template>
    <div class="relative-block">
        <div :class="echart1" class="eee"></div>
        <div class="server-block">
           <div class="fl clearfix">
                <i class="fl"></i>
                <span class="fl">服务器1</span>
            </div>
            <div class="fl clearfix">
                <i class="fl"></i>
                <span class="fl">服务器2</span>
            </div>
            <div class="fl clearfix">
                <i class="fl"></i>
                <span class="fl">服务器3</span>
            </div>
        </div>
        
    </div> 
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
        width: 80%;  
        margin-left: 100px;
    }
    .relative-block{
        position: relative;

    }
    .server-block{
        position: absolute;
        left: 11%;
        top: 10%;
        color: #fff;
    }
    .server-block > div{
        margin: 0 10px;
    }
    .server-block > div > i{
        width: 20px;
        height: 20px;
        background: url('../../assets/server.png') no-repeat;
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
           page: 1
       }
    },
    mounted(){
        let dom = document.querySelector("."+this.echart1)
        let winH = $(window).height();
        $("."+this.echart1).css('height',winH/4.5+ "px")
        this.myChart = echart.init(dom);
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth
        }
        this.getData()
        this.timers = setInterval(()=>{
            if(this.page > 3){
                this.page=1;
            }
            this.getData();
            this.page++;
        }, 10000)      
        // 自适应
    },
    methods:{
        getData(){
            this.$http.get('/datas', {params: {'type' : this.type + this.page}}).then((res)=>{ 
                let datas = res.body.result;
                let seriesData=[],
                    legendData=[];
                for(let [index, value] of datas.yData.entries()){
                    legendData.push(value.name)
                    seriesData.push({
                        "name": value.name,
                        "type": "line",
                        "stack": "总量",
                        "areaStyle": {"normal": {}},
                        "data": value.data
                    })
                }
                let option = {
                    "title": {
                        "text": ""
                    },
                    "tooltip" : {
                        "trigger": "axis",
                        "axisPointer": {
                            "type": "cross",
                            "label": {
                                "backgroundColor": "#6a7985"
                            }
                        }
                    },
                    "legend": {
                        "data":legendData,
                        "textStyle": {
                            "color": "rgb(255, 255, 255)"
                        },
                        "right": 40
                    },
                    "toolbox": {
                        "feature": {
                            "saveAsImage": {}
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
                            "boundaryGap" : false,
                            "data" : datas.xData,
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
                    "series" : seriesData,
                    "textStyle": {
                        "color": "rgb(255, 255, 255)"
                    }
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

