import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatBot from './components/ChatBot';
import Schedules from './components/Schedules';
import Facilities from './components/Facilities';
import Events from './components/Events';
import FAQ from './components/FAQ';

function App() {
  const [activeSection, setActiveSection] = useState('chatbot');

  const renderContent = () => {
    switch (activeSection) {
      case 'chatbot':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl mb-6">
              <h2 className="text-3xl font-bold mb-2">AI Campus Assistant</h2>
              <p className="text-blue-100">Get instant answers to your campus questions with our intelligent chatbot</p>
            </div>
            <ChatBot />
          </div>
        );
      case 'schedules':
        return <Schedules />;
      case 'facilities':
        return <Facilities />;
      case 'events':
        return <Events />;
      case 'faq':
        return <FAQ />;
      default:
        return <ChatBot />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>© 2025 Campus Information System. Powered by AI technology.</p>
            <p className="mt-2">For technical support, contact IT Services at (555) 123-4567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;