import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="container">
      {showConfetti && <Confetti />}
      
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        I’m Really Sorry, Puchku 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Whatever I said, I didn’t mean it that way. I want to make it up to you.
        I’d love to get on a call and clear this up once you’re okay.
      </motion.p>

      <motion.button
        onClick={() => setShowConfetti(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click me for a Hug 🎉
      </motion.button>
    </div>
  );
}

export default App;
