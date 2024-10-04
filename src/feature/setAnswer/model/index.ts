import { $answerList, ISetAnswerPayload } from '@/enteties/question/model';
import { $currentQuestion } from '@/enteties/steps/model';
import { createEvent } from 'effector';

export const updateAnswerList = createEvent<ISetAnswerPayload[]>('set answer')
export const setcurrentQuestion = createEvent('set current question')
export const resetStores = createEvent('reset stores');

$answerList
  .on(updateAnswerList, (_, payload) => [...payload])
  .on(resetStores, () => []);

$currentQuestion
  .on(setcurrentQuestion, (state) => state + 1)
  .on(resetStores, () => 0);