import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { faqData } from '../data/mockData';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hello! I\'m your campus AI assistant. How can I help you today? You can ask me about dining services, library hours, academic schedules, or any other campus-related questions.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processQuery = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Simple keyword matching for demo purposes
    if (lowerQuery.includes('dining') || lowerQuery.includes('food') || lowerQuery.includes('meal')) {
      return 'Our dining services include the main Dining Hall (7 AM - 8 PM), Café Express, Pizza Corner, and Coffee House. Meal plans are available through the student portal. Would you like specific hours for any location?';
    }
    
    if (lowerQuery.includes('library') || lowerQuery.includes('study')) {
      return 'The Central Library is open Mon-Fri: 7 AM - 11 PM, and weekends 9 AM - 9 PM. We offer study rooms, computer labs, printing services, and research assistance. Use your student ID for after-hours access.';
    }
    
    if (lowerQuery.includes('schedule') || lowerQuery.includes('class') || lowerQuery.includes('course')) {
      return 'You can view your class schedule in the Academic Schedules section. For registration, visit the student portal at portal.university.edu. Registration opens 2 weeks before each semester.';
    }
    
    if (lowerQuery.includes('gym') || lowerQuery.includes('fitness') || lowerQuery.includes('workout')) {
      return 'The Fitness Center is open Mon-Fri: 6 AM - 10 PM, weekends 8 AM - 8 PM. We have cardio equipment, weights, group classes, and personal training available.';
    }
    
    if (lowerQuery.includes('health') || lowerQuery.includes('medical') || lowerQuery.includes('sick')) {
      return 'Health Services is located in Building C, open Mon-Fri 8 AM - 5 PM with 24/7 emergency services. We provide medical care, mental health services, pharmacy, and health education.';
    }
    
    if (lowerQuery.includes('event') || lowerQuery.includes('activity')) {
      return 'Check out our Campus Events section for upcoming activities! We have the Fall Career Fair (Feb 15), Winter Concert Series (Feb 20), and Basketball games. All events are listed with times and locations.';
    }
    
    if (lowerQuery.includes('parking') || lowerQuery.includes('car')) {
      return 'Student parking permits are required and can be purchased online. Main student lots are located behind the dorms and near the Recreation Complex. Visitor parking is available in Lot A.';
    }
    
    // Search FAQ for relevant answers
    const relevantFaq = faqData.find(faq => 
      faq.question.toLowerCase().includes(lowerQuery.split(' ')[0]) ||
      faq.answer.toLowerCase().includes(lowerQuery.split(' ')[0])
    );
    
    if (relevantFaq) {
      return relevantFaq.answer;
    }
    
    return 'I\'d be happy to help! I can provide information about dining services, library hours, academic schedules, fitness facilities, health services, campus events, and administrative procedures. Could you please be more specific about what you\'re looking for?';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: processQuery(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center p-4 bg-blue-600 text-white rounded-t-lg">
        <Bot className="w-6 h-6 mr-3" />
        <div>
          <h3 className="font-semibold">Campus AI Assistant</h3>
          <p className="text-sm text-blue-100">Online • Ready to help</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-3 max-w-[80%]`}>
              {message.sender === 'bot' && (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg rounded-bl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about campus..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Ask about dining, library hours, schedules, events, and more!
        </p>
      </div>
    </div>
  );
};

export default ChatBot;