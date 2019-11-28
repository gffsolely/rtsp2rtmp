# rtsp2rtmp
nodejsRTMP服务，使用ffmpeg 把rtsp流转发到rtmp

需要环境： nodejs，ffmpeg库

#### 需要安装node-media-server
```
# On windows

$ cd d:/rtsp2rtmp
$ npm install node-media-server -g

# node .\server_rtmp.js

```

#### rtmp服务启动后使用ffmpeg转发

```
$ ffmpeg.exe -re -i rtsp://localhost/rtsp/live -vcodec copy -f flv rtmp://localhost:1935/live/t1

```

转发成功后 客户端就可以使用 rtmp://localhost:1935/live/t1 地址播放
