
import React from 'react';

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
}

export interface Industry {
  name: string;
  focus: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}