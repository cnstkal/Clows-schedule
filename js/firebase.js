import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig={apiKey:'AIzaSyAA6mbdYfLrrgCJjN47PX91_mU7I53RiBs',authDomain:'site-c67b4.firebaseapp.com',projectId:'site-c67b4',storageBucket:'site-c67b4.firebasestorage.app',messagingSenderId:'744761377245',appId:'1:744761377245:web:3ddaee14f184716eeef634'};
const app=initializeApp(firebaseConfig);const db=getFirestore(app);
window.__db=db;window.__fb={collection,addDoc,getDocs,doc,updateDoc,deleteDoc,query};window.dispatchEvent(new Event('fb-ready'));
