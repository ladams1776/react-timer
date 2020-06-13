import { useEffect } from 'react';
import useHistoryBlock from './useHistoryBlock';

/**
 * Prevent the user from hitting the back button.
 */
const useBackButtonListener = () => {
  const location = sessionStorage.getItem('LOCATION');

  const dispatch = useHistoryBlock(location);

  return useEffect(() => {
    window.addEventListener('popstate', dispatch);
    return () => {
      window.removeEventListener('popstate', dispatch);
    };
  }, [dispatch]);
};

export default useBackButtonListener;
