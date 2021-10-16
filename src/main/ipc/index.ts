import { ipcMain } from 'electron';
import * as sqlite3 from 'sqlite3';
import { IPC_FUNCTIONS } from '../../enums';

ipcMain.handle(IPC_FUNCTIONS.pingPongAsync, async (_, arg) => {
  return arg;
});

ipcMain.handle(IPC_FUNCTIONS.checkIfInitialized, async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(event, msgTemplate(arg));
  const sqlite = sqlite3.verbose();
  const db = new sqlite.Database(':memory:');
  db.serialize(() => {
    db.run('CREATE TABLE lorem (info TEXT)');

    const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    for (let i = 0; i < 10; i += 1) {
      stmt.run(`Ipsum ${i}`);
    }
    stmt.finalize();

    db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
      console.log(err);
      console.log(`${row.id}: ${row.info}`);
    });
  });

  db.close();

  return msgTemplate('pong');
});
