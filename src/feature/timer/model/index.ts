import { createEvent, createStore } from 'effector';

export const timerFinished = createEvent();

export const resetTimer = createEvent<number>();

export const $isTimerFinished = createStore(false)
  .on(timerFinished, () => true)
  .reset(resetTimer);

export const $timerSeconds = createStore(0)
  .on(resetTimer, (_, seconds) => seconds);