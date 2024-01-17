// // auth.js
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// // const auth = getAuth();

// export const signUp = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     console.log('User signed up:', userCredential.user.uid);
//     return userCredential.user;
//   } catch (error) {
//     console.error('Error signing up:', error.message);
//     throw error;
//   }
// };

// export const logIn = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log('User logged in:', userCredential.user.uid);
//     return userCredential.user;
//   } catch (error) {
//     console.error('Error logging in:', error.message);
//     throw error;
//   }
// };
