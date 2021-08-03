const { app, BrowserWindow } = require('electron');
const path = require('path')
app.whenReady().then(() => {
	win = new BrowserWindow({
		title: 'CustomCord',
		width: 900,
		height: 720,
		autoHideMenuBar: true,
		darkTheme: true,
		closable: true,
		resizable: true,
		maximizable: true,
		minimizable: true,
					frame: true,
					backgroundColor: '#36393e',
		icon: path.join(app.getAppPath(), 'logo.png'),
		webPreferences: {
			webSecurity: true,
			nodeIntegration: true,
		},
	})
	win.maximize();
	win.loadURL('https://discord.com/login')
});