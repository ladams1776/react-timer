/**
 * For now, the only time we are not at the home page, is when we are looking at a form, which
 * this check helps with. At some point we will have to tie this to dirty forms specifically.
 * @param {String} currentLocation Location the user is currently in
 */
const checkToMakeSureUserWantsToLeave = () => destLocation => {
  const notOnHomePageButHeadingThere =
    (destLocation !== '/') & (destLocation.pathname === '/');

  if (notOnHomePageButHeadingThere) {
    return window.confirm('Are you sure you want to leave this page?');
  }
};

export default checkToMakeSureUserWantsToLeave;
