import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there! 👋 I\'m MobiusAI, your personal job search assistant. How can I help you today?', isBot: true }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages([...messages, { id: userMessageId, text: newMessage, isBot: false }]);
    setNewMessage('');
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      let botResponse = '';
      
      // Simple response logic based on keywords
      const lowercaseMsg = newMessage.toLowerCase();
      
      if (lowercaseMsg.includes('pricing') || lowercaseMsg.includes('cost') || lowercaseMsg.includes('plan')) {
        botResponse = 'We offer several plans starting at $15/week. You can check out our pricing section for more details!';
      } 
      else if (lowercaseMsg.includes('resume') || lowercaseMsg.includes('cv')) {
        botResponse = 'Our AI system can optimize your resume for each specific job application, increasing your chances of getting through ATS systems!';
      }
      else if (lowercaseMsg.includes('interview')) {
        botResponse = 'Our clients typically see a 7x increase in interview rates when using our service compared to traditional application methods.';
      }
      else if (lowercaseMsg.includes('how') && lowercaseMsg.includes('work')) {
        botResponse = 'It\'s simple! You submit your profile, we find matching jobs, you approve them, and we handle the application process while you prepare for interviews.';
      }
      else {
        botResponse = 'Thanks for reaching out! Would you like to know more about our services or schedule a demo with our team?';
      }
      
      setIsTyping(false);
      setMessages(prevMessages => [...prevMessages, { id: Date.now(), text: botResponse, isBot: true }]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (isOpen) {
      const chatMessages = document.getElementById('chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden flex flex-col transition-all duration-300 animate-slideUp">
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-6 w-6 text-white mr-2" />
              <h3 className="text-white font-medium">MobiusAI Assistant</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:bg-blue-700 rounded-full p-1">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div id="chat-messages" className="flex-1 overflow-y-auto p-4 h-80 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-3/4 rounded-lg p-3 ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t p-4">
            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 focus:outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 flex items-center justify-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={toggleChat}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;