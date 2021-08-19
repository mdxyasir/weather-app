const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {

    const win = new BrowserWindow({
        autoHideMenuBar: true,
        icon: './src/img/weather.png',
        width: 400,
        height: 700,
    });

    win.loadFile('./src/index.html')
})
