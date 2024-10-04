export enum QuestionType {
  Select = 'select',
  Radio = 'radio',
  Text = 'text',
  TextArea = 'textArea'
}

export interface IquestionsList {
  label: string,
  answer?: string[],
  type: QuestionType,
  max?: number
}