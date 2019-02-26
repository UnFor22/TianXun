<template>
  <div class="nav">
    <div class="wraper clearfix">
      <div class="nav_left fll">
        <img src="../assets/logo.jpg" alt="">
        
      </div>
      <div class="nav_middle hover fll">
        <p>选项一</p>
        <p>选项二</p>
        <p>选项三</p>
        <p>选项四</p>
        <p>选项五</p>
        <p>选项六</p>
        <p>选项七</p>
        <p>选项八</p>
        <p>选项九</p>
        <p>选项十</p>
        <p>选项十一</p>
      </div>
      <div class="nav_right flr">
        <input type="text">
        <span>搜索</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.nav{
  height: 100px;
  line-height: 100px;
  background: #fff;
  color: #b0b0b0;
  border-bottom: 1px solid #e0e0e0;
  .wraper{
    width: 1226px;
    margin: 0 auto;
    .nav_left{
      img{
        width: 55px;
        height: 55px;
        margin-top: 22px;
      }
    }
    .nav_middle{
      margin-left: 20px;
      p{
        float: left;
        padding: 0 10px;
        color: #333;
      }
      p:hover{
        color: #ff6700;
      }
    }
    .nav_right{
      input{
        height: 50px;
        border: 1px solid #e0e0e0;
      }
      span{
        display: inline-block;
        padding: 0 10px;
        margin-left: -5px;
        height: 52px;
        line-height: 52px;
        border-top: 1px solid #e0e0e0; 
        border-right: 1px solid #e0e0e0; 
        border-bottom: 1px solid #e0e0e0; 
      }
    }
  }
  
}
.hover{
  p:hover{
    color: #ff6700;
  }
}
</style>
