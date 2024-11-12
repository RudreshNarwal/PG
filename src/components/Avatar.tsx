import React from 'react';
import { motion } from 'framer-motion';

export const Avatar = () => {
  return (
    <motion.div
      className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 
                 shadow-lg backdrop-blur-sm bg-white/10"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=2021&auto=format&fit=crop"
        alt="AI Avatar"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};