
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Quiz from './pages/quiz/Quiz';
import Introduce from './pages/introduce/Introduce';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
      </Routes>
    </div>
  );
}
