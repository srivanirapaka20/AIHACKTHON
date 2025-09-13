import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search, Users, Trophy, Music, BookOpen } from 'lucide-react';
import { eventData } from '../data/mockData';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'academic', label: 'Academic' },
    { value: 'social', label: 'Social' },
    { value: 'sports', label: 'Sports' },
    { value: 'cultural', label: 'Cultural' }
  ];

  const filteredEvents = eventData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-4 h-4" />;
      case 'social': return <Users className="w-4 h-4" />;
      case 'sports': return <Trophy className="w-4 h-4" />;
      case 'cultural': return <Music className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-green-100 text-green-800';
      case 'sports': return 'bg-orange-100 text-orange-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Campus Events</h2>
        <p className="text-purple-100">Stay updated with all the exciting events happening on campus</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
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

      {/* Events Grid */}
      <div className="grid gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                        {getCategoryIcon(event.category)}
                        <span className="ml-1 capitalize">{event.category}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">{formatDate(event.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-600" />
                    <div>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                    <div>
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-3 sm:mb-0">
                    <span className="text-xs text-gray-500">Event ID: {event.id}</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium">
                      Add to Calendar
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                      Share Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Event Categories Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.slice(1).map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`p-4 rounded-lg border-2 border-dashed transition-all duration-200 ${
                selectedCategory === category.value
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-center mb-2">
                {getCategoryIcon(category.value)}
              </div>
              <p className="text-sm font-medium text-gray-900">{category.label}</p>
              <p className="text-xs text-gray-500 mt-1">
                {eventData.filter(e => e.category === category.value).length} events
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;