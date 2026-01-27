
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import Logo from './Logo';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the Seraphis Insight AI. How can I help you with your cybersecurity, Microsoft Azure security, or POPIA compliance needs today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getChatResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-slate-200 overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-navy-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-accent rounded-full p-1">
                <Logo className="w-6 h-6 text-navy-900" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Seraphis Insight AI</h3>
                <div className="flex items-center mt-0.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-[10px] text-slate-300">Active Support</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-navy-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    {msg.role === 'model' ? <Bot className="w-3 h-3 text-accent" /> : <User className="w-3 h-3 text-slate-400" />}
                    <span className="text-[10px] font-bold opacity-60 uppercase">
                      {msg.role === 'model' ? 'Seraphis AI' : 'You'}
                    </span>
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-accent" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about POPIA, SOC, or IR..."
                className="w-full pl-4 pr-12 py-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-accent text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 p-1.5 bg-navy-900 text-white rounded-lg hover:bg-slate-800 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center mt-2 text-slate-400">
              Email us: <a href="mailto:info@seraphis-it.com" className="text-accent hover:underline">info@seraphis-it.com</a>
            </p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-navy-900 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform group relative"
        >
          <MessageSquare className="w-6 h-6 group-hover:hidden" />
          <div className="hidden group-hover:block">
            <Logo className="w-6 h-6 text-accent" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
