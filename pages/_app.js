import "../styles/index.css";
import firebase, { FirebaseContext } from "../firebase";
import useAutentication from "../hooks/useAutentication";

const MyApp = (props) => {
  const usuario = useAutentication();
  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider value={{ firebase, usuario }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
