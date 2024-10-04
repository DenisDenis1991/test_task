import { IquestionsList, QuestionType } from "@/shared/types/questionVariant"

export const questionsList: IquestionsList[] = [
  {
    label: '1 вопрос',
    answer: ['1', '2', '3'],
    type: QuestionType.Radio
  },
  {
    label: '2 вопрос',
    type: QuestionType.Text,
    max: 10
  },
  {
    label: '3 вопрос',
    type: QuestionType.TextArea,
    max: 400
  },
  {
    label: '4 вопрос',
    answer: ['1', '2', '3'],
    type: QuestionType.Select
  },
]