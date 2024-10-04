import { Form } from '@/shared/ui/index';
import { SetAnswer } from '@/feature/setAnswer/ui/setAnswer';
import { useUnit } from 'effector-react';
import { $combined } from '../model';
import { QuestionProgress } from '@/enteties/steps';
import { QuestionComponent } from '@/enteties/question';
import { TimerComponent } from '@/feature/timer/ui/timer';

export const TestForm = () => {
  const [form] = Form.useForm();
  const { step } = useUnit($combined)

  return (
    <>
      <TimerComponent initialSeconds={5} />
      <QuestionProgress step={step} />
      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: "20px" }}
      >
        <QuestionComponent step={step} />
        <SetAnswer step={step} form={form} />
      </Form>
    </>
  )
}
