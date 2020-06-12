/**
 *
 * @param {String} currentLocation Location the user is currently in
 */
const checkToMakeSureUserWantsToLeave = () => destLocation => {
  const notOnHomePageButHeadingThere =
    (destLocation.pathname === '/') & (destLocation !== '/');

    if (notOnHomePageButHeadingThere) {
      return window.confirm('Are you sure you want to leave this page?');
    }
};

export default checkToMakeSureUserWantsToLeave;
