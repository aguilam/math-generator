'use client'
import { useState } from 'react'

export default function Home() {
  const [ answer , setAnswer ] = useState('5')
  const [ userAnswer , setUserAnswer ] = useState('0')
  const [ question , setQuestion ] = useState('5*1')
  const [ questions , setQuestions ] = useState(['5*2','5*3','5*4','5*5','5*6'])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    console.log(e.target.value)
  };

  const checkQuestion = () => {
    const calculateAnswer = new Function('return ' + question)();
    console.log(calculateAnswer)
    setAnswer(calculateAnswer.toString())
    console.log(answer)
    
    if (userAnswer === answer) {
      alert('Правильно!')
      setQuestion(questions[0]);
      console.log(question)
      setQuestions((prevQuestions) => prevQuestions.slice(1));
      console.log(questions)
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
