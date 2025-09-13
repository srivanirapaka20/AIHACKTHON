import React, { useState } from 'react';
import { MapPin, Clock, Phone, Search, Wifi, Car, Coffee, Utensils } from 'lucide-react';
import { facilityData } from '../data/mockData';

const Facilities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFacilities = facilityData.filter(facility =>
    facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    facility.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getIconForFacility = (name: string) => {
    if (name.includes('Library')) return 'w-12 h-12 bg-purple-600';
    if (name.includes('Dining')) return 'w-12 h-12 bg-orange-600';
    if (name.includes('Fitness')) return 'w-12 h-12 bg-green-600';
    if (name.includes('Health')) return 'w-12 h-12 bg-red-600';
    return 'w-12 h-12 bg-blue-600';
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Campus Facilities</h2>
        <p className="text-green-100">Find information about all campus facilities and their services</p>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search facilities or services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid gap-6">
        {filteredFacilities.length > 0 ? (
          filteredFacilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${getIconForFacility(facility.name)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{facility.hours}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{facility.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{facility.contact}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md border border-gray-200">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No facilities found</h3>
            <p className="text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>

      {/* Campus Map & Quick Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-600" />
            Campus Map
          </h3>
          <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Interactive campus map coming soon</p>
              <a href="#" className="text-green-600 hover:text-green-700 text-sm font-medium">
                View PDF Map →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">General Campus Info</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Wifi className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Wi-Fi</p>
                <p className="text-xs text-gray-500">Campus-Wide • Network: CampusWiFi</p>
              </div>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Parking</p>
                <p className="text-xs text-gray-500">Student permits required • Visitor parking in Lot A</p>
              </div>
            </div>
            <div className="flex items-center">
              <Coffee className="w-5 h-5 text-orange-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Coffee Shops</p>
                <p className="text-xs text-gray-500">3 locations • Open 7 AM - 7 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <Utensils className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">Dining Options</p>
                <p className="text-xs text-gray-500">4 locations • Meal plans available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;