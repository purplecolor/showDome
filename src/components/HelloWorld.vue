<template>
  <div>
    <!--地址content  -->
    <div class="content-box">
      <!--默认地址置顶  -->
      <div class="addressList" v-for="(item, index) in addressArr" :key="index">
        <div class="addressItem">
          <div class="addressName">
            <text class="addressDefault" >默认</text>
            <text class="nameTxt">{{item.linkman}} {{item.mobile}}</text>
          </div>
          <div class="addressTxt">
            <div class="detailTxt">{{item.province.name}}{{item.city.name}}{{item.area.name}}{{item.address}}</div>
            <img class="delateImage" src='http://small2.oss-cn-shanghai.aliyuncs.com/button%EF%BC%8F%E4%BF%AE%E6%94%B9%E5%9C%B0%E5%9D%80.png'/>
          </div>
        </div>
        <div class="detateBtn" >删除</div>
      </div>
      <!-- 弹窗 -->
      <div class="tanchuan" v-if="showw">
          <div class="yinying"></div>
          <div class="tishi">
            <div class="sure">确认删除吗</div>
            <div class="xuanze">
              <text class="cancel2" >取消</text>
              <text>确认</text>
            </div>
          </div>
      </div>
    </div>
    <!--添加地址  -->
    <div class='add_address'>添加地址</div>
  </div>
  
</template>

<script>
import { GET } from "../assets/axiosHttp"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      addressArr:null,
      showw:false,//弹窗 选择框
    }
  },
  methods: {
   toHome(){
     this.$router.push({name:`home`})
   },
   getSelf(){
    GET("https://apibo.logoliqp.com/n/my/address",{pageSize:10,pageIndex:1}).then((res)=>{
      console.log(res)
      this.addressArr=res.data.result.data
      console.log(this.addressArr)
    })
   }
  },
  created(){
    this.getSelf()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部  */
.header{
  width:750rpx;
  height:88px;
}
/*地址  */
.content-box{
  width:100%;
   height:auto;
  overflow-y:auto;
  flex: 1;
}
.content-box .content{
  width:100%;
  height:169px;
  border-bottom:20px solid rgb(247, 247, 247);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-box .content .name-box{
  width:90%;
  height:72px;
  display: flex;
  align-items: center;
}
.content-box .content .name-box .name,
.content-box .content .name-box .phone
{
  height:72px;
  line-height: 72px;
  font-size: 26px;
  flex:1;
  font-weight: 900;
}
.content-box .content .name-box .phone{
  text-align: right;
}
.content-box .content .address{
  width:90%;
  height:37px;
  line-height: 37px;
  font-size: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content-box .content .update{
  width:90%;
  height:60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-box .content .update>view{
  flex:1;
  font-size:24px;
  line-height: 60px;
}
.content-box .content .update .default{
  display: flex;
  align-items: center;
}
.icon{
  width:36px;
  height:36px;
  margin-right:30px;
}
.content-box .content .update .updata_btn{
  display: flex;
  justify-content: flex-end;
}
.content-box .content .update .updata_btn>view{
  width:100px;
  height:100%;
  text-align: center;
  color:rgb(255, 51, 102);
}
/*底部添加按钮  */

.add_address{
  width:670px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size:28px;
  color:#fff;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(26, 26, 26, 1);
}
/* 弹窗 确定取消 */
  .yinying{
    width:100%;
    height:100%;
    position:absolute;
    opacity: 0.7;
    background:black;
    top:0;
    left:0;
    z-index: 3;
  }
  .tishi{
    width:560px;
    height:241px;
    background:rgba(255,255,255,1);
    border-radius:8px;
    position: absolute;
    left: 0;
    top:0;
    bottom:0;
    right:0;
    margin:auto;
    padding-top:50px;
    z-index: 3;
  }
  .sure{
    width:100%;
    height:50px;
    text-align: center;
    line-height: 50px;
    font-size: 30px;
    font-weight:700;
    margin-bottom:90px;
    color:rgb(46, 45, 45);
  }
  .xuanze{
    width:100%;
    height:100px;
    display: flex;
    border-top:1px solid #cecece;
  }
  .xuanze text{
    flex:1;
    text-align: center;
    line-height: 100px;
    font-size:36px;
    color:rgba(255,51,102,1);
  }
  .xuanze .cancel2{
    border-right:1px solid #cecece;
    color:rgba(153,153,153,1);
  }
  /* 三期 */
  .addressList{
    width:100%;
    height:196px;
    overflow: hidden;
    position: relative;
  }
  .addressItem{
    width:670px;
    padding:0 40px;
    height:166px;
    padding-top:30px;
    position: absolute;
    z-index: 1;
    background:white;
  }
  .addressName{
    height:42px;
    width:100%;
    display: flex;
    align-items: center;
    margin-bottom:20px;
  }
  .addressDefault{
    width:56px;
    height:32px;
    background:rgba(255,0,45,1);
    margin-right:20px;
    color:rgba(255,255,255,1);
    font-size:20px;
    font-family:PingFangSC-Medium;
    font-weight:700;
    text-align: center;
    line-height: 32px;
  }
  .nameTxt{
    height:42px;
    font-size:30px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .addressTxt{
    width:100%;
    height:37px;
    display: flex;
    justify-content: space-between;
    font-size:26px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
  }
  .detailTxt{
    width:570px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
  .delateImage{
    width:31px;
    height:33px;
  }
  .detateBtn{
    position: absolute;
    right:4px;
    top:0;
    width:136px;
    height:194px;
    background:rgba(255,0,45,1);
    box-shadow:5px 0px 10px 0px rgba(0,0,0,0.1);
    font-size:28px;
    font-family:PingFangSC-Semibold;
    font-weight:700;
    color:rgba(255,255,255,1);
    line-height: 196px;
    text-align: center;
    box-sizing: border-box;
  }
</style>
