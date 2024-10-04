import { loadFromLocalStorage } from "@/shared/lib/loadLocalStorage";
import { createStore } from "effector";


export interface ISetAnswerPayload {
  [key: string]: string,
}

const storedData = loadFromLocalStorage('answerList');

export const $answerList = createStore<ISetAnswerPayload[]>(
  storedData?.answer || [],
  { name: 'answer list' }
)