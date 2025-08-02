export interface App {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  slug: string;
  features: string[];
  status: 'available' | 'coming-soon' | 'beta';
}

export const apps: App[] = [
  {
    id: 'sleeppal',
    name: 'SleepPal',
    description: 'Stops your audio when you fall asleep',
    icon: '/assets/icons/sleep.svg',
    color: 'secondary',
    slug: 'sleeppal',
    features: ['Smart sleep detection', 'Audio control', 'Sleep tracking'],
    status: 'available'
  },
  {
    id: 'cartpal',
    name: 'CartPal',
    description: 'Build your grocery list based on what you actually eat',
    icon: '/assets/icons/cart.svg',
    color: 'primary',
    slug: 'cartpal',
    features: ['Smart grocery suggestions', 'Meal planning', 'Shopping lists'],
    status: 'available'
  },
  {
    id: 'chorepal',
    name: 'ChorePal',
    description: 'Helps roommates or couples split chores',
    icon: '/assets/icons/chore.svg',
    color: 'secondary',
    slug: 'chorepal',
    features: ['Chore assignment', 'Progress tracking', 'Fair distribution'],
    status: 'available'
  },
  {
    id: 'remotepal',
    name: 'RemotePal',
    description: 'The assistant for working from home',
    icon: '/assets/icons/remote.svg',
    color: 'accent',
    slug: 'remotepal',
    features: ['Productivity tracking', 'Focus sessions', 'Work-life balance'],
    status: 'beta'
  },
  {
    id: 'fitpal',
    name: 'FitPal',
    description: 'Your personal fitness companion',
    icon: '/assets/icons/fit.svg',
    color: 'primary',
    slug: 'fitpal',
    features: ['Workout tracking', 'Nutrition guidance', 'Progress monitoring'],
    status: 'coming-soon'
  }
];

export const getAppBySlug = (slug: string): App | undefined => {
  return apps.find(app => app.slug === slug);
}; 