<template>
  <div class="pps clearfix">
    <div class="bg">
      <header class="clearfix">
        <nav class="fl"></nav>
         <img class="fr" src="../../assets/exit.png" title="退出" @click="exitMeth"/>
        <div class="fr" style="width: 15%;">Time： {{times}}</div>
        <div class="fr" style="width: 9%;">Bank： 民生银行</div>
        <div class="fr" style="width: 9%;">user： admin</div>
      </header>

    </div>
    <div class="body-left fl">
      <body-left></body-left>
    </div>
    <div class="body-center fl">
      <body-center></body-center>
    </div>
    <div class="body-right fl">
      <body-right></body-right>
    </div>
  </div>
</template>

<script>
import bodyLeft from '../../component/bodyLeft'
import bodyCenter from '../../component/bodyCenter'
import bodyRight from '../../component/bodyRight'
import $ from 'jquery'
export default {
  name: 'app',
  components:{
    bodyLeft,
    bodyCenter,
    bodyRight
  },
  data(){
    return{
      times: new Date().toLocaleString(),
      setTimer: ""
    }
  },
  methods:{
    exitMeth(){
        this.$router.push('/login');
        window.sessionStorage.setItem("dataSign", "0")
    }
  },
  created(){
    this.setTimer = setInterval(()=>{
      this.times = new Date().toLocaleString()
    }, 1000)
  },
  mounted () {
     $(".pps").height($(window).height())
  },
  destroyed(){
    clearInterval(this.setTimer);
  }
}
</script>

<style scoped>
.pps {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: skyblue;
  background-image: url('../../assets/163de850e78c6431461139b714e333f4.jpg'); 
  background-size: 100% 100%;
}
.body-left{
  width: 22%;
}
.body-center{
  width: 58%;
}
.body-right{
  width: 20%;
}
header{
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  color: #f0f0f0;
}
nav{
   color: #f0f0f0;
   font-size: 18px;
   padding-left: 100px;
   width: 202px;
   height: 80px;
   background: url('../../assets/logo.png') no-repeat left center;
   margin-left: 30px;
}
.bg{
  background:#000;
  margin-bottom: 40px;
}

.bg header img{
  width: 20px;
  height: 20px;
  margin-top: 30px;
  margin-right: 20px;
  cursor: pointer;
}
</style>
