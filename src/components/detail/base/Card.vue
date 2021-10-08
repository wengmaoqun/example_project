<template>
  <div class="card">
    <div class="card-desc boder-bottom">
      <div class="card-left card-item">
        <h3>
          {{ cardInfo.score }}分 <span> {{ cardInfo.desc }}</span>
        </h3>
        <p>
          <span>{{ cardInfo.comment }}条评论</span>
          <span>{{ cardInfo.walkThrough }}条攻略</span>
        </p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
      <div class="card-right card-item">
        <h4>景点简介</h4>
        <p>开放时间,贴士</p>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </div>
    <p class="card-address">
      {{ cardInfo.address }} <i class="iconfont icon-jiantouyou"> </i>
    </p>
  </div>
</template>

<script>
export default {
  name: "DetailCard",
  // props: [cardInfo],
  data() {
    return {
      cardInfo: [
        {
          address: "1111",
          comment: "1788",
          desc: "超赞",
          score: "4.7",
          walkThrough: "4条攻略",
        },
        {
          address: "1116",
          comment: "1788",
          desc: "超赞",
          score: "4.7",
          walkThrough: "4条攻略",
        },
      ],
    };
  },
  
};
</script>

<style lang='less' scoped>
.card {
  padding: 4px 4px 0;
  border-bottom: 10px solid #f5f5f5;
  .card-desc {
    display: flex;
    .card-item {
      position: relative;
      width: 50%;
      h3 {
        color: #ff8300;
        line-height: 20px;
        font-size: 15px;
        span {
          font-size: 10px;
          margin-left: 5px;
        }
      }
      p {
        color: #9e9e9e;
        font-size: 10px;
        line-height: 10px;
        span {
          margin-right: 5px;
        }
      }
      .icon-jiantouyou {
        position: absolute;
        right: 4px;
        bottom: 0;
        top: 0;
        width: 6px;
        height: 6px;
        margin: auto;
        font-size: 15px;
        color: #999;
      }
    }
  }
  .card-address {
    position: relative;
    line-height: 40px;
    .icon-jiantouyou {
      line-height: 1;
    }
  }
}
</style>