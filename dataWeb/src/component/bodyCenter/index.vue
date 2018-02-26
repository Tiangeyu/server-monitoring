<template>
    <div>
        <div id="canvas"/>
        <ul class="info" v-show="showInfo" :style='{"left":infoLeft, "top": infoTop}'>
           <li class="clearfix">{{info.name}} </li> 
           <li class="clearfix"><span>cpu:</span> <font>{{info.cpuUsed}}</font></li>
           <li class="clearfix"><span>hardDiskUsed:</span> <font>{{info.hardDiskUsed}}</font></li>
           <li class="clearfix"><span>memoryUsed:</span><font> {{info.memoryUsed}}</font></li>
        </ul>
        
    </div>
</template>

<style scoped>
  .info{
    position: absolute;
    width: 150px;
    height: 100px;
    background: #fff;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
  }
  .info li{
    line-height: 20px;
  }
  .info span{
    float: left;
    width: 80px;
  }
  .info font{
    float: right;
    width: 40px;
    text-align: left;
  }
</style>

<script>
//  <model-echart class="sandian" :type="echar" echart1="e-3"></model-echart>
// import modelEchart from './echart1.vue'

import servers from '../../assets/servers.png'
import $ from "jquery"
import computer from '../../assets/computer.png'
import pos from '../../assets/pos.png'
export default {
  data() {
    return {
      echar: "sandian",
      graph: "",
      model: "",
      timer: "",
      colorBB: "1",
      parentNodeMap: new Map(),         //储存中心图元
      nodeMap: new Map(),              //储存node图元
      showInfo: false,
      info: {
        name: "",
        cpuUsed: "",
        hardDiskUsed: "",
        memoryUsed: ""
      },
      infoLeft: 0,
      infoTop: 0,
      infoTiemr: '',
      type: "queen"
    };
  },
  components: {
    // modelEchart
  },
  methods: {
    getDate() {   
    //  this.$http.get("/minsheng-poc-web/system/queryOrgEquipmentFaultDatas", { params: { "orgId": 1 } }).then(res => {
     this.$http.get('/datas', {params: {'type' : this.type}}).then((res)=>{ 
    //    let resDate = res.body.data;
         let resDate = res.body.result.data;
        // 拓扑图存在  对比更新
        if(this.graph){
          // 仅涉及状态变换
          for(let [key, value] of resDate.nodes.entries()){
            this.nodeMap.get(value.id).set('data',value)
          }
          // let len = resDate.nodes.length;
          // //  当更新后的数据无减少时
          // if(len >= this.nodeMap.size ){
          //   for(let i=0; i<resDate.nodes.length; i++){          
          //     if(!this.nodeMap.get(resDate.nodes[i].id)){
          //       // 添加
          //       createNode(resDate.nodes[i], 1, this.parentNodeMap.get(resDate.parents.id));       
          //     }else{
          //       let flag= compareData(resDate.nodes[i], this.nodeMap.get(resDate.nodes[i].id).get("data"));
          //       if(flag==false){
          //         // 修改
          //         this.graph.graphModel.remove(this.nodeMap.get(resDate.nodes[i].id));
          //         this.nodeMap.delete(resDate.nodes[i].id);   
          //         createNode(resDate.nodes[i], 1, this.parentNodeMap.get(resDate.parents.id))
          //       }
          //     }        
          //   }
          // }else{
          //   // 当更新后的的数据发生减少时
          //   let conutArr = []; 
          //   let conunt = 0;
          //   for(let key of this.nodeMap.keys()){
          //     conutArr.push(key);
          //     conunt++;
          //   }
          //   for(let i=0; i<this.nodeMap.size; i++){
              
          //     if(!resDate.nodes[i]){             
          //       this.graph.graphModel.remove(this.nodeMap.get(conutArr[i]));
          //       this.nodeMap.delete(conutArr[i]);
          //     }else{
          //       let flag= compareData(resDate.nodes[i], this.nodeMap.get(resDate.nodes[i].id).get("data"));
          //       if(flag==false){
          //         // 修改
          //         this.graph.graphModel.remove(this.nodeMap.get(resDate.nodes[i].id));
          //         this.nodeMap.delete(resDate.nodes[i].id);  
          //         createNode(resDate.nodes[i], 1, this.parentNodeMap.get(resDate.parents.id));
          //       }
          //     }
          //   }
          // }

          // if(!compareData(resDate.parents, this.parentNodeMap.get(resDate.parents.id).get("data"))){
          //     this.graph.graphModel.remove(this.parentNodeMap.get(resDate.parents.id));
          //     delelteNode(resDate.parents.id, createNode(resDate.parents, 2,this.parentNodeMap.get(resDate.parents.id)));
          // }

          clearInterval(this.timer);
          this.timer = setInterval(() => {
            this.colorState()
          }, 1000);
      // 拓扑图不存在 创建
        }else{
          this.graph = new Q.Graph(canvas);
          this.model = this.graph.graphModel;
          translateToQuneeElements(resDate, this.graph);
        }
      });
      // 创建node图元
      const createNode = (data,type, parentNode) =>{
          let node = new Q.Node();
          if(type===1){
            node.image = Q.Graphs.server;
            node.name = data.name;
            node.x = data.x;
            node.y = data.y;
            node.setStyle(Q.Styles.SHADOW_BLUR, 10);
            node.setStyle(Q.Styles.SHADOW_OFFSET_X, 3);
            node.setStyle(Q.Styles.SHADOW_OFFSET_Y, 3);
            node.setStyle(Q.Styles.SHADOW_COLOR, "#fff");
            node.setStyle(Q.Styles.LABEL_COLOR, "#fff");
            node.set("data",data)
            this.graph.graphModel.add(node);
            console.log(this.nodeMap)
            this.nodeMap.set(data.id, node);
            let from = parentNode;
            let to = node;
            if (!from || !to) {
              return;
            }
            this.graph.createEdge(from, to);
            console.log(this.nodeMap)
          }else{
            node.image = Q.Graphs.cloud;
            node.name = data.name;
            node.x = data.x;
            node.y = data.y;
            node.size = { width: 120, height: 70 };
            node.setStyle(
              Q.Styles.LABEL_ANCHOR_POSITION,
              Q.Position.CENTER_MIDDLE
            );
            node.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_MIDDLE);
            node.set("data",data)
            this.graph.graphModel.add(node); 
            this.parentNodeMap.set(data.id, node);
            for(let [key, value] of this.nodeMap.entries()){
              let from = node;
              let to = value;
              if (!from || !to) {
                return;
              }
              this.graph.createEdge(from, to);
            }
          }
         
      }
      // 删除节点 方法问题 将 this.gr...拿出去使用
      const delelteNode = (id,callback) => {        
          //this.graph.graphModel.remove(that.nodeMap.get(id)); 
          this.nodeMap.delete(id);            
          if(callback){
            callback;
          }      
          // let i = 1;
          // let timers = setInterval(()=>{
          //   if(i == 0){
          //       this.graph.graphModel.remove(this.nodeMap.get(id));
          //       this.dataMap.delete(id)             
          //       clearInterval(timers); 
          //       if(callback){
          //         callback;
          //         return;
          //       }                                     
          //   }else{
          //       //this.nodeMap.get(1).setStyle(Q.Styles.ALPHA, i);
          //       i = i - 0.1;
          //   }
              
          // }, 100)
      }
      // 数据对比
      const compareData = (objA, objB) => {       
          if (!isObj(objA) || !isObj(objB)){
              return false; //判断类型是否正确
          }
          if (getLength(objA) != getLength(objB)) {
            return false; //判断长度是否一致
          }
          return CompareObj(objA, objB, true);//默认为true  
      }
      function isObj(object) {
        return object && typeof (object) == 'object' && Object.prototype.toString.call(object).toLowerCase() == "[object object]";
      }
      function isArray(object) {
        return object && typeof (object) == 'object' && object.constructor == Array;
      }
      function getLength(object) {
        var count = 0;
        for (var i in object) count++;
        return count;
      }
      function CompareObj(objA, objB, flag) {
        for (var key in objA) {
          if (!flag) //跳出整个循环
            break;
            if (!objB.hasOwnProperty(key)) { flag = false; break; }
            if (!isArray(objA[key])) { //子级不是数组时,比较属性值
            if (objB[key] != objA[key]) { flag = false; break; }
          } else {
            if (!isArray(objB[key])) { flag = false; break; }
            var oA = objA[key], oB = objB[key];
            if (oA.length != oB.length) { flag = false; break; }
            for (var k in oA) {
              if (!flag) //这里跳出循环是为了不让递归继续
                break;
                flag = CompareObj(oA[k], oB[k], flag);
              }
          }
        }
        return flag;
      }
      // function Compare(objA, objB) {
      // 配置初始化
      const translateToQuneeElements = (json, graph) => {
        let map = {};         //图元关系线
        if (json.nodes) {
          Q.forEach(json.nodes, (data) => {
            let node = new Q.Node();
            switch (data.type){
                case 4:
                node.image =  Q.Graphs.server;
                node.size={width: 30, height: 50};
                break;
                case 2:
                node.image =  Q.Graphs.exchanger;
                break;
                case 6:
                node.image =  Q.Graphs.exchanger2;
                break;
                case 5:
                node.image = computer;
                node.size = {width: 50, height: 46}
                break;
                case 1: 
                 node.image = pos;
                node.size = {width: 50, height: 45}
                break;
                case 3:
                node.image =  Q.Graphs.node;
                break;
            }        
            node.name = data.name;
            node.x = Number(data.xLocation);
            node.y = Number(data.yLocation);
            node.setStyle(Q.Styles.SHADOW_BLUR, 10);
            node.setStyle(Q.Styles.SHADOW_OFFSET_X, 3);
            node.setStyle(Q.Styles.SHADOW_OFFSET_Y, 3);
            node.setStyle(Q.Styles.SHADOW_COLOR, "#fff");
            node.setStyle(Q.Styles.LABEL_COLOR, "#fff");
            node.set("data", data);
            node.set("id",data.id);
            map[data.id] = node;
            this.graph.graphModel.add(node); 
            this.nodeMap.set(data.id, node);
            // 设备
          });
        }
        if (json.parents) {
          let node = new Q.Node();
          node.image = Q.Graphs.cloud;
          node.name = json.parents.name;
          node.x = Number(json.parents.xLocation);
          node.y = Number(json.parents.yLocation);
          node.size = { width: 100, height: 70 };
          node.setStyle(
            Q.Styles.LABEL_ANCHOR_POSITION,
            Q.Position.CENTER
          );
          node.setStyle(Q.Styles.SHADOW_BLUR, 10);
          node.setStyle(Q.Styles.SHADOW_OFFSET_X, 3);
          node.setStyle(Q.Styles.SHADOW_OFFSET_Y, 3);
          node.setStyle(Q.Styles.SHADOW_COLOR, "#fff");
          node.setStyle(Q.Styles.LABEL_COLOR, "#fff");
          //node.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_MIDDLE);
          node.set("data",json.parents)
          map[json.parents.id] = node;
          this.graph.graphModel.add(node); 
          this.parentNodeMap.set(json.parents.id, node);
          this.parentNodeMap.set("data", json.parents)
        }
        if (json.edges) {
          Q.forEach(json.edges,function(data) {
            var from = map[data.parentId];
            var to = map[data.id];
            if (!from || !to) {
              return;
            }
            var edge = graph.createEdge("",from, to);
            edge.setStyle(Q.Styles.EDGE_COLOR, '#88AAEE');
            edge.setStyle(Q.Styles.EDGE_WIDTH, 2);
            if(data.type === 0){
              // 垂直水平线
                edge.edgeType = Q.Consts.EDGE_TYPE_VERTICAL_HORIZONTAL;
            }else if(data.type === 1){
                edge.edgeType = Q.Consts.EDGE_TYPE_HORIZONTAL_VERTICAL;
            }else{
                  edge.edgeType = "";
            }
            edge.set("data", data);
          }, graph);      
        }
        this.graph.isMovable = function(item) {
           return item.movable === false;
        } 
        this.graph.updateViewport();

        // 点击弹出详情
        this.graph.onclick = (evt) => {
          if(evt.getData()){
            let id = evt.getData().get('data').id;
            if(this.nodeMap.get(id)){
              //console.log(evt.getUI().$x+ "======"+evt.getUI().$y)
              if(this.nodeMap.get(id).get('data').dataUsedMap.hasOwnProperty('cpuUsed')){
                if(this.infoTiemr){
                  clearTimeout(this.infoTiemr)
                }
                this.showInfo = true;
                this.infoLeft = evt.clientX + "px";
                this.infoTop = evt.clientY + "px";
                this.info.name = this.nodeMap.get(id).get('data').name;
                this.info.cpuUsed = this.nodeMap.get(id).get('data').dataUsedMap.cpuUsed;
                this.info.hardDiskUsed = this.nodeMap.get(id).get('data').dataUsedMap.hardDiskUsed;
                this.info.memoryUsed = this.nodeMap.get(id).get('data').dataUsedMap.memoryUsed;
                this.infoTiemr = setTimeout(()=>{
                  this.showInfo = false
                }, 2000)
              }
            }
          }
        }
        this.timer = setInterval(() => {
          this.colorState()
        }, 1000);
      };
    },
    colorState(){
      if (this.colorBB === "1") { 
        for(let [key, value] of this.nodeMap.entries()){
          if(value.get("data").status === 1){
            value.setStyle(Q.Styles.SHADOW_COLOR, "#7CFC00");
          } else if (value.get("data").status === 2) {
            value.setStyle(Q.Styles.SHADOW_COLOR, "#ff0000");
          } else if (value.get("data").status === 3) {          
            value.setStyle(Q.Styles.SHADOW_COLOR, "#EE7600");
          }
        } 
        this.parentNodeMap.get(1).setStyle(Q.Styles.SHADOW_COLOR, "#7CFC00")   
        this.colorBB = "0";
      } else {
        for (let [key, value] of this.nodeMap.entries()) {
          value.setStyle(Q.Styles.SHADOW_COLOR, "#fff");
        }
        this.parentNodeMap.get(1).setStyle(Q.Styles.SHADOW_COLOR, "#fff") 
        this.colorBB = "1";
      }
    } 
  },
  mounted() {
    let winH = $(window).height();
    $("#canvas").css("height",winH/1.25+"px")
    this.getDate();
    this.timer1 = setInterval(()=>{   
        this.getDate()
    }, 10000)
  },
  destroyed() {
    clearInterval(this.timer1);
    clearInterval(this.timer);
  }
};
</script>
