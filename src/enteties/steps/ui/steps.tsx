import { questionsList } from '@/shared/config/const';
import { Steps } from '@/shared/ui/index';

interface IstepsProps {
  step: number
}

export const QuestionProgress: React.FC<IstepsProps> = ({step}) => {

  const { Step } = Steps;
  return (
    <Steps current={step}>
      {questionsList.map((item) => (
        <Step key={item.label} title={item.label} />
      ))}
    </Steps>
  )
}
