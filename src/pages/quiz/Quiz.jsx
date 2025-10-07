import React, { useEffect, useState } from 'react';
import './Quiz.css';
import { useParams } from 'react-router-dom';
import * as api from '../../api/api';
import QuestionCard from '../../component/questionCard/QuestionCard';

export default function Quiz() {
  const { difficulty, amount } = useParams();
  const [questionData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await api.fetchQuizData(difficulty, amount);
        if (alive) {
          setQuestionsData(data || []);
          setCount(0);
          setScore(0);
          setModal(false);
        }
      } catch (e) {
        if (alive) setQuestionsData([]);
        console.error(e);
      }
    })();
    return () => {
      alive = false;
    };
  }, [difficulty, amount]);

  return (
    <div className="quiz">
      <QuestionCard
        questionsData={questionData}
        score={score}
        setScore={setScore}
        count={count}
        setCount={setCount}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}
