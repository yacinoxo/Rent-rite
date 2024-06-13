"use client"
// components/NumberAnimation.js
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NumberAnimation = ({ from, to, duration, text }) => {
  const controls = useAnimation();
  const [number, setNumber] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        value: [from, to],
        transition: { duration: duration, ease: "easeInOut" },
      });
    }
  }, [controls, from, to, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      custom={number}
      onUpdate={(latest) => setNumber(latest.value)}
      className="font-bold text-white text-xl text-center"
    >
      {`+${Math.round(number)} ${text}`}
    </motion.div>
  );
};

export default NumberAnimation;
