<template>
  <div class="header">
    <div class="wraper clearfix">
      <div class="header_left hover">
        <p class="fll">选项一</p><span>|</span>
        <p class="fll">选项二</p><span>|</span>
        <p class="fll">选项三</p><span>|</span>
        <p class="fll">选项四</p><span>|</span>
        <p class="fll">选项五</p><span>|</span>
        <p class="fll">选项六</p><span>|</span>
        <p class="fll">选项七</p><span>|</span>
        <p class="fll">选项八</p><span>|</span>
        <p class="fll">选项九</p><span>|</span>
        <p class="fll">选项十</p><span>|</span>
        <p class="fll">选项十一</p><span>|</span>
        <p class="fll">选项十二</p>
        
      </div>
      <div class="header_right flr">
        <div class="right_l hover fll">
          <p class="fll">选项一</p><span class="fll">|</span>
          <p class="fll">选项二</p><span class="fll">|</span> 
          <p class="fll">选项三</p>
        </div>
        <div class="right_r flr">
          <img class="fll" src="../assets/gouwuche1.png" alt="">
          <p>车（0）</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.header{
  height: 40px;
  line-height: 40px;
  background: #333;
  color: #b0b0b0;
  
  .wraper{
    width: 1226px;
    margin: 0 auto;
    .header_left{
      p{
        float: left;
        font-size: 12px;
        margin: 0;
        // border-left: 1px solid #424242;
        // background: #000;
      }
      span{
        color: #424242;
        float: left;
        margin: 0 6px;
      }
    }
    .header_right{
      p{
        float: left;
        font-size: 12px;
        margin: 0;
        // border-left: 1px solid #424242;
        // background: #000;
      }
      span{
        color: #424242;
        float: left;
        margin: 0 6px;
      }
      .right_r{
        width: 120px;
        background: #424242;
        color: #b0b0b0;
        text-align: center;
        margin-left: 20px;
        img{
          width: 20px;
          margin-top: 10px;
          vertical-align: middle;
          margin-left: 30px;
        }
      }
    }
  }
  
}
.hover{
  p:hover{
    color: #fff;
  }
}
</style>
