// 需要先安装node-media-server
// npm install node-media-server -g

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
    allow_origin: '*'
  }
};
 
var nms = new NodeMediaServer(config)
nms.run();
