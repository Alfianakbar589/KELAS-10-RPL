import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon, Delete, Equal, Minus, Plus, X } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const fullEquation = equation + display;
      // Note: eval is simple but should be avoided in production. 
      // For this simple task, it's fine.
      const result = eval(fullEquation.replace('x', '*'));
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const btnClass = "h-16 flex items-center justify-center text-xl font-bold rounded-2xl transition-all active:scale-95 glass-card hover:bg-white/10";
  const opClass = "h-16 flex items-center justify-center text-xl font-bold rounded-2xl transition-all active:scale-95 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30";

  return (
    <section id="calculator" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl p-6 shadow-2xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <CalcIcon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white">Calculator</h2>
          </div>

          {/* Display */}
          <div className="bg-black/40 rounded-2xl p-6 mb-6 text-right overflow-hidden border border-white/5">
            <div className="text-gray-500 text-sm h-6 mb-1">{equation}</div>
            <div className="text-4xl font-bold text-white truncate">{display}</div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-3">
            <button onClick={clear} className="col-span-2 h-16 flex items-center justify-center text-xl font-bold rounded-2xl transition-all active:scale-95 bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20">AC</button>
            <button onClick={() => setDisplay(display.slice(0, -1) || '0')} className={opClass}><Delete className="w-6 h-6" /></button>
            <button onClick={() => handleOperator('/')} className={opClass}>÷</button>

            {[7, 8, 9].map(n => <button key={n} onClick={() => handleNumber(String(n))} className={btnClass}>{n}</button>)}
            <button onClick={() => handleOperator('x')} className={opClass}>×</button>

            {[4, 5, 6].map(n => <button key={n} onClick={() => handleNumber(String(n))} className={btnClass}>{n}</button>)}
            <button onClick={() => handleOperator('-')} className={opClass}>−</button>

            {[1, 2, 3].map(n => <button key={n} onClick={() => handleNumber(String(n))} className={btnClass}>{n}</button>)}
            <button onClick={() => handleOperator('+')} className={opClass}>+</button>

            <button onClick={() => handleNumber('0')} className="col-span-2 h-16 flex items-center justify-center text-xl font-bold rounded-2xl transition-all active:scale-95 glass-card hover:bg-white/10">0</button>
            <button onClick={() => handleNumber('.')} className={btnClass}>.</button>
            <button onClick={calculate} className="h-16 flex items-center justify-center text-xl font-bold rounded-2xl transition-all active:scale-95 bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
              <Equal className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
