// 需要先安装node-media-server
// npm install node-media-server -g

// 各种配置参考 https://www.cnblogs.com/ldy-blogs/p/10081787.html


const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 3030
  },
  http: {
    port: 8082,
    allow_origin: '*',
	mediaroot: './medias',
  },
  //// 转 hls 时使用如下配置
  //trans: {
  //  ffmpeg: './ffmpeg/ffmpeg',
  //  tasks: [
  //    {
  //      app: 'live',
  //      hls: true,
  //      hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
  //      dash: true,
  //      dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
  //    }
  //  ]
  //}
};
 
var nms = new NodeMediaServer(config)
nms.run();
