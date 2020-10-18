/*  const onvif = require('node-onvif');
// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://118.189.65.66:8082/onvif/device_service',
  user: 'admin',
  pass: 'admin'
});
// Initialize the OnvifDevice object
device.init().then((info) => {
  // Show the detailed information of the device.
  console.log(JSON.stringify(info, null, '  '));
}).catch((error) => {
  console.error(error);
});

 */

    var ip_address = "lawcam.thddns.net"
    //camera username and password
    var username = "tester"
    var password="AsDfJkL-1234"
    var port = 9773

Stream = require('node-rtsp-stream');
  stream1 = new Stream({
  name: 'Cam1',
 // streamUrl: 'rtsp://username:password@ip_address:port/cam/realmonitor?channel=1&subtype=0',
  streamUrl:'rtsp://78.159.192.163/live/ch00_0',
  //streamUrl:'rtsp://tester:AsDfJkL-1234@clawcam.thddns.net:9773/cam/realmonitor?channel=1&subtype=0',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-r': 25,// options with required values specify the value after the key
    '-q:v':32,
    '-s':'1280x720'
  }
});

 stream2 = new Stream({
  name: 'Cam2',
  //streamUrl:'rtsp://195.46.114.132/live/ch00_0',
  streamUrl:'rtsp://116.197.222.158/live/ch00_0',
  wsPort: 9000,
  ffmpegOptions: { // options ffmpeg flags
    '-r': 30 ,// options with required values specify the value after the key
    '-q:v':32,
    '-s':'1280x720'
    //'-s':'800x450'
    }
});

