export interface SiteData {
  communities: Community[];
  speakers: Speaker[];
  talks: Talks;
  sponsors: Sponsor[];
  partners: Sponsor[];
  faq: FAQItem[];
  activate_agenda?: boolean;
  images: string[];
  mentors: Mentor[];
  workshops: Workshop[];
}

export interface Sponsor {
  name: string;
  link: string;
  image: string;
}

export interface Talks {
  communities: Talk[];
  frontend: Talk[];
  invite: Talk[];
  principal: Talk[];
}

export interface Talk {
  speaker: Speaker;
  room: string;
  hour: string;
  description: string;
  id: number;
  title: string;
  image: boolean;
  featured?: boolean;
}

export interface Speaker {
  role: string;
  company: string;
  bio: string;
  social_link: string;
  id: number;
  title: string;
  image: string;
  keynote: boolean;
}

export interface Community {
  link: string;
  id: number;
  title: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Workshop {
  name: string;
  image: string;
  theme: string;
  hour: string;
}

export interface Mentor {
  name: string;
  image: string;
  theme: string;
}
