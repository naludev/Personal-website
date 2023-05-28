export const firebaseConfig = {
  apiKey: process.env.REACT_APP_ANALYTICS_API_KEY,
  authDomain: process.env.REACT_APP_ANALYTICS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_ANALYTICS_PROJECT_ID,
  storageBucket: process.env.REACT_APP_ANALYTICS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_ANALYTICS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ANALYTICS_APP_ID,
  measurementId: process.env.REACT_APP_ANALYTICS_MEASUREMENT_ID
}

export const events = {
  INITIALIZE: 'Inicialización firebase',
  HOME: 'Home page',
  CONTACT: 'Contact page',
  HIRE_ME: 'Hire me',
  DOWNLOAD_RESUME: 'Download resume',
  SUBMIT_CONTACT: 'Submit contact',
  SOCIAL_MEDIA_MAIL: 'Mail',
  SOCIAL_MEDIA_INSTAGRAM: 'Instagram',
  SOCIAL_MEDIA_LINKEDIN: 'Linkedin',
  SOCIAL_MEDIA_GITHUB: 'Github'
}

const analytics = {
  firebaseConfig,
  events
}

export default analytics
