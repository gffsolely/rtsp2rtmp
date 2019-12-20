<template>
  <video id="videoElement" autoplay muted style="background-color:#fff;height:600px;width:100%;"></video>
</template>

<script>
import flvjs from 'flv.js'

export default {
  name: 'flvjs',
  props: {
    src: {
      type: String,
      default: 'http://localhost:8082/live/t1.flv'
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    let flvSrc = this.src
    console.log('flvSrc:', flvSrc)
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement')
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: flvSrc
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      flvPlayer.play()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
