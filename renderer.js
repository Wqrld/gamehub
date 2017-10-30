// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow
const newWindowBtn1 = document.getElementById('yiko1')
const newWindowBtn2 = document.getElementById('yiko2')
const newWindowBtn3 = document.getElementById('yiko3')

const path = require('path')

var child = require('child_process').execFile;
var executablePath = "D:\\Program Files\\Steam\\Steam.exe";
var parameters = ["-start steam://open/bigpicture"];


newWindowBtn1.addEventListener('click', function (event) {
/*   const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ frame: false, transparent: false })
  win.on('close', function () { win = null })
  win.loadURL("https://developer.mozilla.org/nl/docs/Web/API/Document/getElementById")
  win.show() */
  child(executablePath, parameters, function(err, data) {
     console.log(err)
     console.log(data.toString());
});
})

newWindowBtn2.addEventListener('click', function (event) {
/*   const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ frame: false, transparent: false })
  win.on('close', function () { win = null })
  win.loadURL("https://developer.mozilla.org/nl/docs/Web/API/Document/getElementById")
  win.show() */
  child("D:\\Program Files\\Dolphin\\Dolphin.exe", function(err, data) {
     console.log(err)
     console.log(data.toString());
});
})

newWindowBtn3.addEventListener('click', function (event) {
/*   const modalPath = path.join('file://', __dirname, '../../sections/windows/modal.html')
  let win = new BrowserWindow({ frame: false, transparent: false })
  win.on('close', function () { win = null })
  win.loadURL("https://developer.mozilla.org/nl/docs/Web/API/Document/getElementById")
  win.show() */
  child("C:\\Users\\werel\\AppData\\Roaming\\Spotify\\Spotify.exe", parameters, function(err, data) {
     console.log(err)
     console.log(data.toString());
});
})
