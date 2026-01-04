import React from 'react';

export type Page = 'home' | 'services' | 'properties' | 'about' | 'contact';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  guests: number;
  bedrooms: number;
  image: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}