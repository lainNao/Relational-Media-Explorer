const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // ユーティリティ
  on(channel, func) {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  once(channel, func) {
    ipcRenderer.once(channel, (event, ...args) => func(...args));
  },
  // 型をつけてipcで定義した関数を呼ぶだけ。名前は合わせる必要がある
  pingPongAsync: (args) => ipcRenderer.invoke('pingPongAsync', args),
  pingPongSync: (args) => args,
  checkIfInitialized: (args) => ipcRenderer.invoke('checkIfInitialized', args),
});
