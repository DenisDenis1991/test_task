import { $answerList } from "@/enteties/question/model"
import { $currentQuestion } from "@/enteties/steps/model"
import { combine } from "effector"

export const $combined = combine($answerList, $currentQuestion, (answerList, currentQuestion) => {
  return {
    step: currentQuestion,
    answer: answerList,
  }
})

$combined.watch((combined) => {
  localStorage.setItem('answerList', JSON.stringify(combined))
})
