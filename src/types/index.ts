export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ScheduleItem {
  id: string;
  course: string;
  instructor: string;
  time: string;
  location: string;
  day: string;
}

export interface FacilityInfo {
  id: string;
  name: string;
  hours: string;
  location: string;
  services: string[];
  contact: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'academic' | 'social' | 'sports' | 'cultural';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}