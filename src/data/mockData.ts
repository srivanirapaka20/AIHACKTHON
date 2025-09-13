import { ScheduleItem, FacilityInfo, Event, FAQ } from '../types';

export const scheduleData: ScheduleItem[] = [
  {
    id: '1',
    course: 'Computer Science 101',
    instructor: 'Dr. Johnson',
    time: '9:00 AM - 10:30 AM',
    location: 'Tech Building - Room 204',
    day: 'Monday'
  },
  {
    id: '2',
    course: 'Mathematics 201',
    instructor: 'Prof. Williams',
    time: '11:00 AM - 12:30 PM',
    location: 'Science Hall - Room 105',
    day: 'Monday'
  },
  {
    id: '3',
    course: 'English Literature',
    instructor: 'Dr. Brown',
    time: '2:00 PM - 3:30 PM',
    location: 'Liberal Arts - Room 301',
    day: 'Tuesday'
  },
  {
    id: '4',
    course: 'Physics Lab',
    instructor: 'Prof. Davis',
    time: '10:00 AM - 1:00 PM',
    location: 'Physics Lab - Room A12',
    day: 'Wednesday'
  }
];

export const facilityData: FacilityInfo[] = [
  {
    id: '1',
    name: 'Central Library',
    hours: 'Mon-Fri: 7:00 AM - 11:00 PM, Sat-Sun: 9:00 AM - 9:00 PM',
    location: 'Main Campus - Building A',
    services: ['Study Rooms', 'Computer Lab', 'Printing Services', 'Research Assistance'],
    contact: '(555) 123-4567'
  },
  {
    id: '2',
    name: 'Student Dining Hall',
    hours: 'Breakfast: 7:00-10:00 AM, Lunch: 11:00 AM-3:00 PM, Dinner: 5:00-8:00 PM',
    location: 'Student Union Building',
    services: ['All-You-Can-Eat', 'Vegetarian Options', 'Grab & Go', 'Coffee Shop'],
    contact: '(555) 123-4568'
  },
  {
    id: '3',
    name: 'Fitness Center',
    hours: 'Mon-Fri: 6:00 AM - 10:00 PM, Sat-Sun: 8:00 AM - 8:00 PM',
    location: 'Recreation Complex',
    services: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Personal Training'],
    contact: '(555) 123-4569'
  },
  {
    id: '4',
    name: 'Health Services',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM, Emergency: 24/7',
    location: 'Health Center - Building C',
    services: ['Medical Care', 'Mental Health', 'Pharmacy', 'Health Education'],
    contact: '(555) 123-4570'
  }
];

export const eventData: Event[] = [
  {
    id: '1',
    title: 'Fall Career Fair',
    date: '2025-02-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Student Union Ballroom',
    description: 'Connect with top employers and explore career opportunities across various industries.',
    category: 'academic'
  },
  {
    id: '2',
    title: 'Winter Concert Series',
    date: '2025-02-20',
    time: '7:00 PM - 9:00 PM',
    location: 'Campus Auditorium',
    description: 'Enjoy performances by student musicians and special guest artists.',
    category: 'cultural'
  },
  {
    id: '3',
    title: 'Basketball Game vs. State University',
    date: '2025-02-18',
    time: '6:00 PM - 8:00 PM',
    location: 'Campus Arena',
    description: 'Cheer on our team in this exciting home game. Student tickets are free!',
    category: 'sports'
  },
  {
    id: '4',
    title: 'Spring Club Fair',
    date: '2025-02-25',
    time: '12:00 PM - 3:00 PM',
    location: 'Campus Quad',
    description: 'Discover student organizations and find your community on campus.',
    category: 'social'
  }
];

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'How do I register for classes?',
    answer: 'You can register for classes through the student portal at portal.university.edu. Registration opens based on your class standing and begins 2 weeks before each semester.',
    category: 'academic'
  },
  {
    id: '2',
    question: 'Where can I get my student ID card?',
    answer: 'Student ID cards are issued at the Student Services Office in the Administration Building, Room 101. Bring a government-issued photo ID and your enrollment verification.',
    category: 'administrative'
  },
  {
    id: '3',
    question: 'What dining options are available on campus?',
    answer: 'We have the main Dining Hall, Café Express, Pizza Corner, and the Coffee House. Meal plans can be purchased through the student portal.',
    category: 'dining'
  },
  {
    id: '4',
    question: 'How do I access the library after hours?',
    answer: 'Use your student ID card to access the library during extended hours. The card readers are located at all main entrances.',
    category: 'facilities'
  }
];