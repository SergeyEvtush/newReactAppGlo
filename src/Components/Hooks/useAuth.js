import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export function useAuth(authFireBase) {
  const [authentification, setAuthentification] = useState(null);

  const auth = getAuth(authFireBase);

  const provider = new GoogleAuthProvider();
  const logIn = () => signInWithPopup(auth, provider);
  const logOut = () =>
    signOut(auth)
      .then()
      .catch((err) => console.log(err));
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthentification(user);
      } else {
        setAuthentification(null);
      }
    });
  }, [authentification]);
  return { authentification, logIn, logOut };
}
