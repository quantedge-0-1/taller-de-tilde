export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  lessons: number;
  lessonsList: Lesson[];
  emoji: string;
  color: string;
  accentColor?: string;
  materials: string[];
  tools: string[];
  tips: string[];
  outcome: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: string[];
}

export interface Designer {
  id: string;
  name: string;
  years: string;
  origin: string;
  philosophy: string;
  biography: string;
  keyDesigns: string[];
  techniques: string[];
  legacy: string;
  exercise: string;
  emoji: string;
  color: string;
  accentColor: string;
}

export interface City {
  id: string;
  name: string;
  country: string;
  emoji: string;
  tagline: string;
  history: string;
  trends: string[];
  iconicDesigns: string[];
  culturalInfluences: string[];
  inspiration: string;
  color: string;
  accentColor: string;
}

export interface SavedDesign {
  id: string;
  name: string;
  category: string;
  emoji: string;
  color: string;
  date: string;
  favorite: boolean;
  config?: DesignConfig;
}

export interface DesignConfig {
  garmentType: string;
  primaryColor: string;
  secondaryColor: string;
  fabric: string;
  collar: string;
  sleeve: string;
  length: string;
  pattern: string;
  decoration: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  date: string;
  pinned: boolean;
}

export interface Collection {
  id: string;
  name: string;
  emoji: string;
  date: string;
  items: string[];
}

export interface LunaMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface TutorialProject {
  id: string;
  title: string;
  description: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  duration: string;
  emoji: string;
  color: string;
  steps: TutorialStep[];
  materials: string[];
}

export interface TutorialStep {
  number: number;
  title: string;
  description: string;
  tips: string[];
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  emoji: string;
  earned: boolean;
  earnedDate?: string;
}
