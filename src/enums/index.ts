/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-redeclare */

export const IPC_FUNCTIONS = {
  example: 'example',
  checkIfInitialized: 'checkIfInitialized',
  pingPongAsync: 'pingPongAsync',
  pingPongSync: 'pingPongSync',
} as const;

// 以下は type IPC_FUNCTIONS = 0 | 1 | 2 と同じ
export type IPC_FUNCTIONS = typeof IPC_FUNCTIONS[keyof typeof IPC_FUNCTIONS];
