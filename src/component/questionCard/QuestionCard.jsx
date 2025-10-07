import React, { useMemo, useState } from 'react';
import './QuestionCard.css';

export default function QuestionCard({
  questionsData = [],
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
}) {
  const [selected, setSelected] = useState(null);

  // Aktif soru
  const q = questionsData[count];
const answers = useMemo(() => q?.answers || [], [q]);

  // Yükleniyor / bitti kontrolleri hook'lardan SONRA yapılmalı
  if (!questionsData.length) {
    return <div className="qstc">Yükleniyor...</div>;
  }

  if (!q) {
    return (
      <div className="qstc">
        <h2>Quiz Bitti 🎉</h2>
        <p>
          Doğru: <b>{score}</b> — Yanlış: <b>{questionsData.length - score}</b>
        </p>
        <button style={{width:'250px', height:'35px'}}  onClick={() => window.location.assign('/')}>Başa Dön</button>
      </div>
    );
  }
  // Cevap seçenekleri (API tarafında hazırlanıyor ama yine de güvenli)
  

  const approvedChoice = (e) => {
    const choice = e.currentTarget.value;
    setSelected(choice);

    // Skoru güncelle
    if (choice === q.correct_answer) {
      setScore((s) => s + 1);
    }

    // 800ms sonra sıradaki soruya geç
    setTimeout(() => {
      setSelected(null);
      setCount((c) => c + 1);
      // Son sorudan sonra modal göstermek istersen:
      if (count + 1 >= questionsData.length) {
        setModal?.(true);
      }
    }, 800);
  };

  return (
    <div className="qstc">
      <div className="qstc-head">
        <span>
          {count + 1}/{questionsData.length}
        </span>{' '}
        —{' '}
        <span dangerouslySetInnerHTML={{ __html: q.question }} />
      </div>

      <div className="answers">
        {answers.map((answer, i) => {
          const isSelected = selected === answer;
          const isCorrect = answer === q.correct_answer;
          const btnClass =
            selected == null
              ? ''
              : isSelected
              ? isCorrect
                ? 'btn-correct'
                : 'btn-wrong'
              : isCorrect
              ? 'btn-correct'
              : '';

          return (
            <button
              key={i}
              className={btnClass}
              onClick={approvedChoice}
              value={answer}
              disabled={selected != null}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      {/* İstersen ilerleme çubuğu */}
      <div className="progress">
        <div
          className="bar"
          style={{
            width: `${((count + 1) / questionsData.length) * 100}%`,
          }}
        />
      </div>

      {/* Modal kullanacaksan, basit bitiş ekranı */}
      {modal && (
        <div className="modal">
          <div className="modal-card">
            <h3>Sonuç</h3>
            <p>
              Doğru: <b>{score}</b> — Yanlış:{' '}
              <b>{questionsData.length - score}</b>
            </p>
            <button onClick={() => window.location.assign('/')}>Tekrar Başla</button>
          </div>
        </div>
      )}
    </div>
  );
}
