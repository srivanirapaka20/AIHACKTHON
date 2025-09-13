import React from 'react';
import { MessageCircle, Calendar, MapPin, Clock, Users, HelpCircle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'chatbot', label: 'AI Assistant', icon: MessageCircle },
    { id: 'schedules', label: 'Schedules', icon: Clock },
    { id: 'facilities', label: 'Facilities', icon: MapPin },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Campus Info System</h1>
              <p className="text-xs text-gray-500">AI-Powered Student Assistant</p>
            </div>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;