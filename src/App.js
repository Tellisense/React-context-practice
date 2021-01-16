import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Header />
      <Form />
      <Main />
    </UserProvider>
  );
};

export default App;
