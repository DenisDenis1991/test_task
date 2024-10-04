import { loadFromLocalStorage } from "@/shared/lib/loadLocalStorage";
import { createStore } from "effector";

const storedData = loadFromLocalStorage('answerList');

export const $currentQuestion = createStore<number>(
  storedData?.step || 0,
  { name: 'current question' }
)