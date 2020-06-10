import { useEffect } from 'react';

//@TODO: Write up the test for this guy
/**
 * Use at the top of every page, that way we can help keep
 * track if the user should be questioned when refreshing or hitting
 * the back button.
 * @param {String} currentLocation: the current URL location.
 */
const useSetCurrentLocation = currentLocation => {
  return useEffect(() => {
    console.log('sessionStorage', global.sessionStorage);
    global.sessionStorage.setItem('LOCATION', currentLocation);
  }, [currentLocation]);
};

export default useSetCurrentLocation;
