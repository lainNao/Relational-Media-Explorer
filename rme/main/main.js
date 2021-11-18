const { app, BrowserWindow } = require('electron')
const path = require('path')
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    }
  })

  // 「npm run start:localhost」したらlocalhost:3000を開く
  if (process.env.NODE_ENV === "dev:localhost") {
    win.loadURL("http://localhost:3000")
  } else {
    const indexFilePath = path.join(__dirname, "../renderer/build/index.html")
    win.loadFile(indexFilePath)
  }
}

app.whenReady().then(() => {
  createWindow()
  console.log(111)


  db.all('SELECT * FROM users', (err, rows) =>{
    if (err) {
        console.log(err);
        return;
    }
    rows.forEach((row) =>{
        console.log('id:' +row.id);
    })
  });

  app.on('activate', () => {

    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
