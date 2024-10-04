import { Checkbox, Form, Input, Radio } from "@/shared/ui/index";
import { match } from "ts-pattern";
import { QuestionType } from "@/shared/types/questionVariant";
import { questionsList } from "@/shared/config/const";


interface IQuestionComponent {
  step: number
}

export const QuestionComponent = ({ step }: IQuestionComponent) => {
  const question = questionsList[step];
  
  if (!question) {
    return null;
  }

  const { label, type, answer, max } = question;

  return (
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
            <Input maxLength={max} placeholder={`Ответ не более ${max} символов`} />
          ))
          .with(QuestionType.Select, () => (
            <Checkbox.Group
              options={answer?.map(el => ({ label: el, value: el }))}
            />
          ))
          .with(QuestionType.TextArea, () => (
            <Input.TextArea rows={4} placeholder={`Максимальное колличество символов ${max}`} maxLength={max} />
          ))
          .otherwise(() => (
            <Input type="text" size="large" />
          ))
      }
    </Form.Item>
  );
};
