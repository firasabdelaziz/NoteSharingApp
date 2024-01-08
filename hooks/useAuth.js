import { useEffect, useReducer, useMemo, useCallback } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../services/config';
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    default:
      return prevState;
  }
};

export const useAuth = () => {
  const auth = getAuth(app);

  const [state, dispatch] = useReducer(authReducer, initialState);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOutContext: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    []
  );


  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        dispatch({
          type: 'RESTORE_TOKEN',
          token: authenticatedUser?.stsTokenManager?.accessToken,
        });
        SplashScreen.hideAsync();
      } else {
        dispatch({ type: 'RESTORE_TOKEN', token: null });
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, [auth]);

  return { state, authContext };
};
