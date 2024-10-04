import { Checkbox, Form, Input, Radio } from "../ui"
import { IquestionsList, QuestionType } from "../types/questionVariant"
import { match } from "ts-pattern"

export const questionList = (questionsList: IquestionsList[]) => {

  return questionsList.map((question) => {
    const { label, type, answer, max } = question
    return (
      {
        label: label,
        content: (
          <Form.Item
            name={label}
            label={label}
          >
            {
              match(type)
                .with(QuestionType.Radio, () => (
                  <Radio.Group
                    options={answer}
                  />
                ))
                .with(QuestionType.Text, () => (
                  <Input maxLength={max} placeholder={max as number > 10 ? 'Развернутый ответ' : `Ответ не более ${max} символов`} />
                ))
                .with(QuestionType.Select, () => (
                  <Checkbox.Group
                    options={answer?.map(el => ({ label: el, value: el }))}
                  />
                ))
                .otherwise(() => (
                  <Input type="text" size="large" />
                ))
            }
          </Form.Item>
        )
      }
    )
  })
}