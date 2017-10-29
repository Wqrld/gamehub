// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const BrowserWindow = require('electron').remote.BrowserWindow
const newWindowBtn = document.getElementById('yiko')

const path = require('path')

var child = require('child_process').execFile;
var executablePath = "D:\\Program Files\\Steam\\Steam.exe";
var parameters = ["-start steam://open/bigpicture"];


newWindowBtn.addEventListener('click', function (event) {
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