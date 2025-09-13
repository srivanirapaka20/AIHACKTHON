import React, { useState } from 'react';
import { Clock, MapPin, User, Search, Filter } from 'lucide-react';
import { scheduleData } from '../data/mockData';

const Schedules: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState('all');

  const days = ['all', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const filteredSchedule = scheduleData.filter(item => {
    const matchesSearch = item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDay = selectedDay === 'all' || item.day === selectedDay;
    return matchesSearch && matchesDay;
  });

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Academic Schedules</h2>
        <p className="text-blue-100">View your class timetables and important academic dates</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {days.map(day => (
                <option key={day} value={day}>
                  {day === 'all' ? 'All Days' : day}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid gap-4">
        {filteredSchedule.length > 0 ? (
          filteredSchedule.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.course}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.instructor}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {item.day}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No classes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="#" className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Exam Schedule</span>
          </a>
          <a href="#" className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Academic Calendar</span>
          </a>
          <a href="#" className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">Office Hours</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Schedules;