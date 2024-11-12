import React, { useState } from 'react';
import { Mic, Square } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);

      recorder.ondataavailable = (e) => {
        const audioUrl = URL.createObjectURL(e.data);
        console.log('Audio recorded:', audioUrl);
      };
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  return (
    <motion.button
      onClick={isRecording ? stopRecording : startRecording}
      className="relative group px-8 py-4 rounded-full backdrop-blur-md bg-white/10 
                 border border-white/20 shadow-lg hover:bg-white/20 transition-all
                 flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isRecording ? (
        <Square className="w-6 h-6 text-red-500" />
      ) : (
        <Mic className="w-6 h-6 text-white" />
      )}
      <span className="text-white font-medium">
        {isRecording ? 'Stop Recording' : 'Ask me a question?'}
      </span>
      {isRecording && (
        <motion.div
          className="absolute -inset-[2px] rounded-full bg-red-500/20"
          animate={{ opacity: [0.5, 0.2] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};