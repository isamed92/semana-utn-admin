import React from 'react';

import { auth } from '../firebase/firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut} >
    Salir
  </button>

export default SignOutButton;
