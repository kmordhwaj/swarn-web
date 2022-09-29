import {createContext, useContext, useEffect, useState} from 'react';
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from './firebase.js';
import { doc, addDoc, collection } from "firebase/firestore";
import {db, provider, fbProvider } from '../firebase-config';

const UserContext = createContext();
const  postCollectionRef = collection(db, "users")
const timeNow = new Date();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [userId, setUserId] = useState({});

  const createUser = (email, password, fName, sName,phone) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then(
        async (userCredential) => {
            const user = userCredential.user;

            try{
                const docRef = await addDoc(postCollectionRef, {
                    id: user.uid ,
          firstName: fName,
          secondName: sName,
          profileImageUrl: null ,
          email: email,
          bio: null,
          timeCreated: timeNow.toLocaleString() ,
          phone: phone,
          favourite_products: {},
                }
                );
                console.log('doc written with id : ', docRef.id);
            } catch (err){
                  console.error('error adding doc: ', err);
            }
        }
    )
    .catch( (error) => {
        const errorCode =error.code;
        const errorMessage = error.message
    });

  }

  const signIn =  (email, password) =>  {
    
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      setUser(userCredential.user );
      setUserId(userCredential.user.uid );
    }

    )
    .catch( (error) => {
      const errorCode =error.code;
      const errorMessage = error.message
  })
    ;
    
  }

  const signinwithGoogle = async () => {
   await signInWithPopup(auth, provider).then(
    async (resultz) => {
    try{
          const docRef = await addDoc(postCollectionRef, {
              id: resultz.user.uid ,
    firstName: resultz.user.photoUrl ,
    secondName: '',
    profileImageUrl: resultz.user.photoURL ,
    email: resultz.user.email ,
    bio: null,
    timeCreated: timeNow.toLocaleString() ,
    phone: resultz.user.phoneNumber ,
    favourite_products: {},
          }
          );
          console.log('doc written with id : ', docRef.id);
      } catch (err){
            console.error('error adding doc: ', err);
      }
  }
    )
  }

  // const signinwithGoogle = async () => {
  //   if (this.platform.is('cordova')) {
  //     return this.gl.login(['email', 'public_profile']).then(res => {
  //       const googleCredential = auth.GoogleAuthProvider.credential(res.authResponse.accessToken);
  //       return auth.signInWithCredential(googleCredential);
  //     })
  //   }
  //   else {
  //     return auth
  //       // .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //       // .then(res => console.log(res));
  //      .signInWithPopup(auth, provider).then(
  //         async (resultz) => {
  //         try{
  //               const docRef = await addDoc(postCollectionRef, {
  //                   id: resultz.user.uid ,
  //         firstName: resultz.user.photoUrl ,
  //         secondName: '',
  //         profileImageUrl: resultz.user.photoURL ,
  //         email: resultz.user.email ,
  //         bio: null,
  //         timeCreated: timeNow.toLocaleString() ,
  //         phone: resultz.user.phoneNumber ,
  //         favourite_products: {},
  //               }
  //               );
  //               console.log('doc written with id : ', docRef.id);
  //           } catch (err){
  //                 console.error('error adding doc: ', err);
  //           }
  //       }
  //         )
  //   }
  // }

  // signInWithGoogle() {
  //   if (this.platform.is('cordova')) {
  //     return this.gl.login(['email', 'public_profile']).then(res => {
  //       const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.authResponse.accessToken);
  //       return firebase.auth().signInWithCredential(googleCredential);
  //     })
  //   }
  //   else {
  //     return this.afAuth.auth
  //       .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  //       .then(res => console.log(res));
  //   }
  // }

  const signinwithFb = async () => {
    await signInWithPopup(auth, fbProvider).then(
     async (resultz) => {
     try{
           const docRef = await addDoc(postCollectionRef, {
               id: resultz.user.uid ,
     firstName: resultz.user.firstName ,
     secondName: resultz.user.secondName ,
     profileImageUrl: resultz.user.photoURL ,
     email: resultz.user.email ,
     bio: null,
     timeCreated: timeNow.toLocaleString() ,
     phone: resultz.user.phoneNumber ,
     favourite_products: {},
           }
           );
           console.log('doc written with id : ', docRef.id);
       } catch (err){
             console.error('error adding doc: ', err);
       }
   }
     )
   }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser);
    setUser(currentUser);
    setUserId(currentUser.uid);
   })
   return () => {
      unSubscribe();
   }
  }, [])

  return (
   <UserContext.Provider value={{createUser, user,userId, logout, signIn, signinwithGoogle, signinwithFb }} >
     {children}
   </UserContext.Provider>
   )
}

export const UserAuth = () => {
    return useContext(UserContext)
}

