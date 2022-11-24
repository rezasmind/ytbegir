const fs = require('fs')
const ytdl = require('ytdl-core')

ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ",{quality: '18'}).pipe(
  fs.createWriteStream("video2.mp4")
);

