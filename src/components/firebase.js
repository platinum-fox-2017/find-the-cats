import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: `AIzaSyCJP2lXoXb1eUxXK0Wh81T1DLbDmZN7jZY`,
  authDomain: `eksa-projects.firebaseapp.com`,
  databaseURL: `https://eksa-projects.firebaseio.com`,
  projectId: `eksa-projects`,
  storageBucket: ``,
  messagingSenderId: `677299954434`
})

export const db = app.database()
export const roomRefs = db.ref('rooms')
export const charRefs = db.ref('characters')
export const userRefs = db.ref('users')
