import { Location } from 'interfaces/global';

/**
 * For now, the only time we are not at the home page, is when we are looking at a form, which
 * this check helps with. At some point we will have to tie this to dirty forms specifically.
 */
const checkToMakeSureUserWantsToLeave = (destLocation: Location): boolean => {
  const notOnHomePageButHeadingThere = destLocation !== '/' && destLocation?.pathname === '/';

  if (notOnHomePageButHeadingThere) {
    return window.confirm('Are you sure you want to leave this page?');
  }

  return false;
};

export default checkToMakeSureUserWantsToLeave;
