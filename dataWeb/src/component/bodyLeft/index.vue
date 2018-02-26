<template>
    <div class="main">
       <model-echart class="zhu" :type="types[0]" echart1="e-1"></model-echart>
       <pie-echart :type="types[1]" echart1="e-5"></pie-echart>
    </div>
</template>

<style scoped>
   
</style>

<script>

import modelEchart from './echart1.vue'
import pieEchart from './pieEchart.vue'
import $ from 'jquery'
export default {
   components:{
       modelEchart,
       pieEchart
   },
   data(){
       return {
           types:['zhu','bing']
       }
   },
   mounted(){
        let winH = $(window).height();
        $(".zhu").css({'margin-bottom':winH/20+ "px"})
   }
}
</script>

