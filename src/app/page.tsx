'use client'
import { useState } from 'react'

export default function Home() {
  const [ answer , setAnswer ] = useState('20')
  const [ userAnswer , setUserAnswer ] = useState('0')
  const [ question , setQuestion ] = useState('4*5')
  const [ questions , setQuestions ] = useState(['','','','',''])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const checkQuestion = () => {
    const calculateAnswer = new Function('return ' + question)();
    const correctAnswer = calculateAnswer.toString();
    setAnswer(correctAnswer)
    if (userAnswer === answer) {
      alert('Правильно!')
    } else {
      alert('Неправильно!')
    }
  };

  const handleButtonClick = () => {
    checkQuestion();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=' bg-cyan-400'>
        <p>{question}</p>
        <form>
          <input
            type="text"
            className='text-black'
            value={userAnswer}
            onChange={handleInputChange}
          />
          <button type="button" className='bg-cyan-500' onClick={handleButtonClick}>
            Подтвердить ответ
          </button>
        </form>
      </div>
    </main>
  );
};
