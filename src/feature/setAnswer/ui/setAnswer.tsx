import { Button, Form } from '@/shared/ui/index';
import { resetStores, setcurrentQuestion, updateAnswerList } from '../model';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import { FormInstance } from 'antd';
import { $answerList } from '@/enteties/question/model';
import { questionsList } from '@/shared/config/const';
import { $isTimerFinished, resetTimer } from '@/feature/timer/model';


interface IsetAnswerProps {
  step: number,
  form: FormInstance,
}

export const SetAnswer: React.FC<IsetAnswerProps> = ({ step, form }) => {
  const answerList = useUnit($answerList)
  const [isReset, setIsReset] = useState(false)

  useEffect(() => {
    setIsReset(step === questionsList.length)
  }, [step])

  const isTimerFinished = useUnit($isTimerFinished);

  const handleAddAnswer = () => {
    updateAnswerList([...answerList, form.getFieldsValue()]);
    setcurrentQuestion()
  };

  const handleReset = () => {
    resetTimer(15)
    form.resetFields()
    setIsReset(false)
    resetStores();
    localStorage.removeItem('answerList')
  }
  
  return (
    <Form.Item>
      {(step <= questionsList.length - 1 && !isTimerFinished) && (
        <Button
          type="primary"
          onClick={handleAddAnswer}
          disabled={isTimerFinished}
        >
          Ответить
        </Button>
      )}
      {(isReset || isTimerFinished) && (
        <Button type="primary" onClick={handleReset}>
          Пройти тест заново
        </Button>
      )}
    </Form.Item>
  )
}
