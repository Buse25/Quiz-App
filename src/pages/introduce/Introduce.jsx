import React, { useState } from 'react';
import './Introduce.css';
import DropDown from '../../component/dropdown/DropDown';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

export default function Introduce() {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('easy'); // <-- varsayılan easy
  const data = ['easy', 'medium', 'hard'];
  const TOTAL_QUESTION = 10;

  const handleStart = () => {
    // artık difficulty her zaman dolu olacak
    navigate(`/quiz/${difficulty}/${TOTAL_QUESTION}`);
  };

  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={logo} alt="Logo" />
        <DropDown data={data} value={difficulty} onChange={setDifficulty} />
        <button className='aaaaa' onClick={handleStart}>Quize Başla</button>
      </div>
    </div>
  );
}
