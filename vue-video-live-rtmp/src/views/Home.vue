<template>
  <div class="home">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
    <div class="subtitle">如果没有播放，请检查是否已允许浏览器使用 Flash 播放</div>

    <div class="example-title"> # vue-video-player 播放 RTMP 流 </div>
    <Row type="flex" justify="center" :gutter="20">
      <Col :span="18">
        <Row type="flex" justify="start" :gutter="20" >
          <i-col :span="12" v-for="(item, i) in videoInfo" :key="`info-${i}`" style="margin-bottom:30px;">
            <Card>
              <p slot="title" style="">{{ item.title }}</p>
              <div >
                <RtmpLive :src="item.videoSrc"></RtmpLive>
              </div>
            </Card>
          </i-col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
import RtmpLive from "@/components/RtmpLive.vue";

export default {
  name: "home",
  components: {
    RtmpLive
  },
  data () {
    return {
      title: 'web 播放视频流/直播',
      subtitle: '使用 vue-video-player、flv.js 播放 RTMP、HLS、HTTP-FLV 视频流',
      videoInfo: [
        { title: '本地rtmp测试', videoSrc: 'rtmp://localhost:1935/live/t1'}
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
a {
  // color: #42b983;
  color: #fff;
}
a:hover {
  color: #fff;
}
.title {
  height: 1em;
  line-height: 1em;
  font-weight: 700;
  font-size: 4rem;
  margin: 1.5em 0 1.2em;
}
.subtitle {
  font-size: 1.8em;
  color: #a5a5a5;
  margin: 1em 0;
  font-weight: bold;
}
.actions {
  margin-top: 3em;
  margin-bottom: 2em;
}
.example-title {
  font-size: 1.8em;
  font-weight: bold;
  margin-top: 3em;
  margin-bottom: 2em;
}
</style>

