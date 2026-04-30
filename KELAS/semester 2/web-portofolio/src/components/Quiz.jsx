import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, HelpCircle, RefreshCcw, Trophy, XCircle } from 'lucide-react';

const questions = [
  {
    question: "Apa singkatan dari HTML?",
    options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Tool Markup Language", "Hyper Text Multi Language"],
    answer: 0
  },
  {
    question: "Bahasa pemrograman apa yang sering digunakan untuk styling website?",
    options: ["PHP", "Python", "CSS", "Java"],
    answer: 2
  },
  {
    question: "Siapa penemu JavaScript?",
    options: ["Mark Zuckerberg", "Brendan Eich", "Bill Gates", "Steve Jobs"],
    answer: 1
  },
  {
    question: "Framework CSS mana yang menggunakan utility-first approach?",
    options: ["Bootstrap", "Foundation", "Bulma", "Tailwind CSS"],
    answer: 3
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          {!showScore ? (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-400/20">
                    <HelpCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Quiz IT</h2>
                </div>
                <div className="text-gray-400 font-medium">
                  Pertanyaan {currentQuestion + 1} / {questions.length}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl text-white font-medium leading-relaxed">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => {
                  let btnStyle = "glass-card border-white/5 hover:border-white/20";
                  if (isAnswered) {
                    if (index === questions[currentQuestion].answer) {
                      btnStyle = "bg-green-500/20 border-green-500/50 text-green-400";
                    } else if (index === selectedOption) {
                      btnStyle = "bg-red-500/20 border-red-500/50 text-red-400";
                    } else {
                      btnStyle = "opacity-50 grayscale";
                    }
                  } else if (selectedOption === index) {
                    btnStyle = "border-primary bg-primary/10";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full p-4 text-left rounded-xl transition-all duration-300 border flex items-center justify-between group ${btnStyle}`}
                    >
                      <span className="text-gray-200 group-hover:text-white">{option}</span>
                      {isAnswered && index === questions[currentQuestion].answer && <CheckCircle2 className="w-5 h-5" />}
                      {isAnswered && index === selectedOption && index !== questions[currentQuestion].answer && <XCircle className="w-5 h-5" />}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={nextQuestion}
                  className="mt-8 w-full py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all"
                >
                  {currentQuestion + 1 === questions.length ? "Lihat Hasil" : "Pertanyaan Selanjutnya"}
                </motion.button>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-400/20 mb-6 animate-bounce">
                <Trophy className="w-12 h-12 text-yellow-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Quiz Selesai!</h2>
              <p className="text-gray-400 mb-8">Skor kamu adalah</p>
              <div className="text-6xl font-black text-primary mb-8">
                {Math.round((score / questions.length) * 100)}
              </div>
              <p className="text-white font-medium mb-10">
                Kamu menjawab benar {score} dari {questions.length} pertanyaan
              </p>
              <button
                onClick={restartQuiz}
                className="flex items-center gap-2 mx-auto px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all"
              >
                <RefreshCcw className="w-5 h-5" /> Main Lagi
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Quiz;
