export default interface Api {
  con: (channel: string, ...arg: any) => void;
  once: (channel: string, ...arg: any) => void;

  pingPongAsync: (ping: string) => Promise<string>;
  pingPongSync: (ping: string) => string;
  checkIfInitialized: (sample: string) => Promise<boolean>;
}

declare global {
  interface Window {
    api: Api;
  }
}
