// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyBqvyC-dsgjXjsEUued_yrM_sh5xOyiFhE",
  authDomain: "proyectoreact-6b22e.firebaseapp.com",
  projectId: "proyectoreact-6b22e",
  storageBucket: "proyectoreact-6b22e.firebasestorage.app",
  messagingSenderId: "T75528522967",
  appId: "1:75528522967:web:4750ac9041ebeee8003492",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };