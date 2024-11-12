import React from 'react';
import { AudioRecorder } from './components/AudioRecorder';
import { Avatar } from './components/Avatar';
import { GripHorizontal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 
                    flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-12 max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Voice Assistant
          </h1>
          <p className="text-lg text-white/80">
            Ask me anything and I'll respond with wisdom
          </p>
        </div>

        <Avatar />

        <div className="flex flex-col items-center gap-6">
          <AudioRecorder />
          
          {/* Status indicator */}
          <div className="flex items-center gap-2 text-white/60">
            <GripHorizontal className="w-4 h-4" />
            <span className="text-sm">Ready to listen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;