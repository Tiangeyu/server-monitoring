<template>
    <div>
        <div class="priceThings-parent">
            <nav class="clearfix"><font style="width: 35%">设备</font><font style="width: 35%">负责人</font><font style="width: 30%">工单状态</font></nav>
            <div class="list_lh priceThings">
                <ul>
                    <li v-for="(item, index) in scrollDate" class='clearfix'>
                        <font class='fl' style="width: 38%">{{item.equipNo}}</font>
                        <font class='fl' style="width: 38%">{{item.storeName}}</font>
                        <font class='fr' v-if="item.orderStatus == 0" style="width: 24%">
                            未执行
                        </font>
                        <font class='fr' v-else-if="item.orderStatus == 1"  style="width: 24%">
                            已执行
                        </font>
                        <font class='fr'  v-else-if="item.orderStatus == 2" style="width: 24%">
                            待审核
                        </font>
                        <font class='fr'  v-else-if="item.orderStatus == 3"  style="width: 24%">
                            未通过
                        </font>
                        <font class='fr'  v-else  style="width: 24%">
                            已完成
                        </font>
                    </li>
                </ul>
            </div>
         </div>
        <div class="table-block">
            <div class="nav-table">{{tableTitle}}</div>
            <table>
                <tr>
                    <th v-for="(item, index) in title" :key="index">
                        {{item}}
                    </th>
                </tr>
                <!-- <tr v-for="(item, index) in tableData.rows" :key="index" :style='{"backgroundColor": index === 1 ? "red": "none" }'>
                    <td>{{item.Iname}}</td>
                    <td>{{item.nowValue}}</td>
                    <td>{{item.collectTime}}</td>
                    <td>{{item.workSpace}}</td>
                </tr> -->
                <tr :style='{"backgroundColor": temperatureBoole === false ? "red": "transparent" }'>
                    <td>温度</td>
                    <td>{{tableData.temperature}}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>18℃~25℃</td>
                </tr>
                <tr :style='{"backgroundColor": humidityBoole === false ? "red": "transparent" }'>
                    <td>湿度</td>
                    <td>{{tableData.humidity}}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>49％～51％</td>
                </tr>
                <tr :style='{"backgroundColor": tableData.smokeSense === false ? "red": "transparent" }'>
                    <td>烟感</td>
                    <td>{{tableData.smokeSense === true ? "正常":"异常"}}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>A相电压</td>
                    <td>{{ tableData.AboxVvoltage }}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>B相电压</td>
                    <td>{{tableData.BboxVvoltage}}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>C相电压</td>
                    <td>{{tableData.CboxVvoltage}}</td>
                    <td>{{tableData.addTime}}</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default{
        data(){
            return{
                types:'bing',
                scrollDate: [],
                tableTitle: "北京机构关键环境指标",
                title: ["指标名称","当前值","最近采集时间","正常区间"],
                tableData: {
                    smokeSense: false,
                    humidity: "48%",
                    CboxVvoltage: "220V",
                    BboxVvoltage: "220V",
                    AboxVvoltage: "220V",
                    addTime: "2018-02-02",
                    temperature: "19℃"
                },
                temperatureBoole: true,
                humidityBoole: true
            }
        },
        components:{
        },
        methods:{
            getTableData(){
                this.$http.get("/minsheng-poc-web/system/querySingleOrgKeyEnvironmentalIndicators",{params:{"orgId":"1"}}).then((res)=>{
                    if(res.body.result === "000"){
                        this.tableData = res.body.data;
                        let normalTem = parseInt(this.tableData.temperature);
                        let normalHu = parseInt(this.tableData.humidity);
                        if(normalTem > 25 || normalTem < 18){
                            this.temperatureBoole = false;
                        }else{
                            this.temperatureBoole = true
                        }
                        if(normalHu > 51 ||　normalHu < 49){
                            this.humidityBoole = false;
                        }else{
                            this.humidityBoole = true;
                        }

                    }   
                })
            },
            getScrollData(){
            //     this.$http.get('http://192.168.8.5:8297/order/main/api/findOrderMonitor').then((res)=>{
            //    // this.$http.get('/datas', {params: {'type': 'scrolldate'}}).then((res)=>{
            //         this.scrollDate = res.body.list;
            //     })
                this.scrollDate = [
                    { equipNo:"MSJHJ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSLYQ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSLYQ10000100001", orderStatus:"0", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSZJ10000100002", orderStatus:"0", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSZJ10000100001", orderStatus:"2", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSFWQ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSFWQ10000100001", orderStatus:"3", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSXSQ10000100002", orderStatus:"3", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSXSQ10000100001", orderStatus:"4", storeName:"北京睿银科技有限公司"},
                     { equipNo:"MSJHJ10000100001", orderStatus:"4", storeName:"北京睿银科技有限公司"}
                ]
            }
        },
        created(){
            console.log(this.tableData)
            $.fn.myScroll = function(options){
                //默认配置
                var defaults = {
                    speed:40,  //滚动速度,值越大速度越慢
                    rowHeight:24 //每行的高度
                };
                var opts = $.extend({}, defaults, options),intId = [];
                function marquee(obj, step){
                    obj.find("ul").animate({
                        marginTop: '-=1'
                    },0,function(){
                        var s = Math.abs(parseInt($(this).css("margin-top")));
                        if(s >= step){
                            $(this).find("li").slice(0, 1).appendTo($(this));
                            $(this).css("margin-top", 0);
                        }
                    });
                }
                    
                this.each(function(i){
                    var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
                    intId[i] = setInterval(function(){
                        if(_this.find("ul").height()<=_this.height()){
                            clearInterval(intId[i]);
                        }else{
                            marquee(_this, sh);
                        }
                    }, speed);
                    _this.hover(function(){
                        clearInterval(intId[i]);
                    },function(){
                        intId[i] = setInterval(function(){
                            if(_this.find("ul").height()<=_this.height()){
                                clearInterval(intId[i]);
                            }else{
                                marquee(_this, sh);
                            }
                        }, speed);
                    });
                });
            }   
        },
        mounted(){
            let winH = $(window).height();
            $(".priceThings").css({'height':winH/4.5+ "px"})
            $(".priceThings-parent").css({'margin-bottom': winH/15 + "px",'margin-top': winH/15 + "px"})
            // this.$http.get('http://192.168.8.5:8297/order/main/api/findOrderMonitor').then((res)=>{
            //this.$http.get('/datas', {params: {'type': 'scrolldate'}}).then((res)=>{
             //   this.scrollDate = res.body.list;
                this.scrollDate = [
                    { equipNo:"MSJHJ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSLYQ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSLYQ10000100001", orderStatus:"0", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSZJ10000100002", orderStatus:"0", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSZJ10000100001", orderStatus:"2", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSFWQ10000100002", orderStatus:"1", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSFWQ10000100001", orderStatus:"3", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSXSQ10000100002", orderStatus:"3", storeName:"北京睿银科技有限公司"},
                    { equipNo:"MSXSQ10000100001", orderStatus:"4", storeName:"北京睿银科技有限公司"},
                     { equipNo:"MSJHJ10000100001", orderStatus:"4", storeName:"北京睿银科技有限公司"}
                ]
                $("div.list_lh").myScroll({
                    speed: 30, 
                    rowHeight: 28
                });
            // })
            this.getTableData();
            setInterval(()=>{
                this.getTableData();
                this.getScrollData();
            }, 10000)
        }
    }
</script>

<style scoped>
    .priceThings-parent{
        border-style: solid;
        border-width: 15px 15px 15px;
        border-image-source: url("../../assets/b75ed9d01c82945b8560e6bc4d79feec.png");
        border-image-slice: 26 27 27 fill;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: repeat;
        background: none;
    }
    .priceThings{
        font-size: 12px;
        line-height: 28px;
        overflow: hidden;
        padding: 10px 0;
        color: #fff;
        margin-right: 10px;
        margin-top: 10px;
    }
    .priceThings>ul>li>font{
        width: 33.3%;
        color: #fff;
        text-align: center;
    }
    .priceThings-parent > nav > font{
        float: left;
        font-size: 14px;
        height: 36px;
        color: #fff;
        text-align: center;
        line-height: 36px;
    }
    .table-block{
        border-style: solid;
        border-width: 8px 15px 15px;
        border-image-source: url("../../assets/b75ed9d01c82945b8560e6bc4d79feec.png");
        border-image-slice: 26 27 27 fill;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: repeat;
        background: none;
        margin-right: 10px;
    }
    .nav-table{
        color: #fff;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        line-height: 30px;
    }
    .table-block > table{
        color: #fff;
        width: 100%;
    }
    .table-block > table > tr{
        line-height: 30PX;
    }
    .table-block > table > tr > td,.table-block > table > tr > th{
        border: 1px solid #ccc;
    }
</style>