"use client";

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const FloatingChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Welcome to AstroNexus! 🌟 I'm your cosmic guide. How can I help you explore the stars today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const dummyResponses = [
        "The stars are aligning in your favor! ✨",
        "Your cosmic energy is strong today. What would you like to know?",
        "I sense great potential in your birth chart. Let me guide you.",
        "The universe has a message for you. Are you ready to receive it?",
        "Your celestial journey begins now. What aspect of astrology interests you most?",
    ];

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Add bot response after delay
        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 2,
                text: dummyResponses[Math.floor(Math.random() * dummyResponses.length)],
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.div
                className="fixed bottom-8 right-8 z-50"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative w-16 h-16 bg-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
                    >
                        {/* Revolving Planets */}
                        <div className="absolute inset-0">
                            {[0, 120, 240].map((rotation, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        marginLeft: '-40px',
                                        marginTop: '-40px',
                                    }}
                                    animate={{
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * 0.3
                                    }}
                                >
                                    <div
                                        className="absolute"
                                        style={{
                                            top: '0',
                                            left: '50%',
                                            transform: `translateX(-50%) rotate(${rotation}deg)`,
                                        }}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-gray-800' :
                                                index === 1 ? 'bg-gray-600' :
                                                    'bg-gray-400'
                                            }`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Chat Icon */}
                        <MessageCircle className="w-7 h-7 text-black relative z-10" />
                    </button>
                )}
            </motion.div>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-8 right-8 w-96 h-[600px] bg-black z-50 shadow-2xl overflow-hidden"
                    >
                        {/* Animated Border */}
                        <div className="absolute inset-0 pointer-events-none">
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    background: `
                    linear-gradient(90deg, white 50%, transparent 50%),
                    linear-gradient(90deg, white 50%, transparent 50%),
                    linear-gradient(0deg, white 50%, transparent 50%),
                    linear-gradient(0deg, white 50%, transparent 50%)
                  `,
                                    backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
                                    backgroundSize: '15px 2px, 15px 2px, 2px 15px, 2px 15px',
                                    backgroundPosition: '0 0, 0 100%, 0 0, 100% 0',
                                }}
                                animate={{
                                    backgroundPosition: ['0 0, 0 100%, 0 0, 100% 0', '15px 0, -15px 100%, 0 -15px, 100% 15px']
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>

                        {/* Header */}
                        <div className="bg-black border-b border-white/20 p-4 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-xl">🔮</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Cosmic Guide</h3>
                                    <p className="text-xs text-white/50">Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4 bg-black">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user'
                                                ? 'bg-white text-black'
                                                : 'bg-white/10 text-white border border-white/20'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black border-t border-white/20">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about your cosmic journey..."
                                    className="flex-1 bg-white/5 border border-white/20 rounded-none px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-white text-black px-4 py-2 rounded-none hover:bg-gray-200 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingChatWidget;
