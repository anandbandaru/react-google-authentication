import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  "1079946091408-oj6k4t5q9pd0ekkiasq04m5p64bg6tjd.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
