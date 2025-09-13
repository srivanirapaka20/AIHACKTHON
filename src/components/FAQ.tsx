import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/mockData';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'academic', label: 'Academic' },
    { value: 'administrative', label: 'Administrative' },
    { value: 'dining', label: 'Dining' },
    { value: 'facilities', label: 'Facilities' }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-orange-100">Find quick answers to common student questions</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions or answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => {
            const isExpanded = expandedItems.includes(faq.id);
            
            return (
              <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 mt-2 capitalize">
                        {faq.category}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
        <div className="text-center">
          <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Can't find what you're looking for?</h3>
          <p className="text-gray-600 mb-4">Our support team is here to help you with any questions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium">
              Contact Support
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-white transition-colors duration-200 font-medium">
              Submit Question
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.slice(1).map(category => (
          <div key={category.value} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {faqData.filter(faq => faq.category === category.value).length}
              </div>
              <div className="text-sm text-gray-600 mt-1">{category.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;