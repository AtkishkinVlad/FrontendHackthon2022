import React from "react";

const withAuth = (Component: React.FC) => {
    const Auth = (props: any) => {
      // Login data added to props via redux-store (or use react context for example)
      const { isLoggedIn } = props;
  
      // If user is not logged in, return login component
      if (!isLoggedIn) {
        return <Login />
      }
  
      // If user is logged in, return original component
      return (
        <Component {...props} />
      );
    };
  
    return Auth;
  };
  
  export default withAuth;