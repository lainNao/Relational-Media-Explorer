import React, { useEffect } from 'react';
import { IPC_FUNCTIONS } from '../../../enums';

export const SamplePage = () => {
  // サンプルIPC通信
  useEffect(() => {
    const sample = async () => {
      const res1 = await window.api[IPC_FUNCTIONS.pingPongAsync]('aaa');
      const res2 = window.api[IPC_FUNCTIONS.pingPongSync]('bbb');
      console.log(res1);
      console.log(res2);
    };
    sample();
  }, []);

  return <div>sample</div>;
};
