const checkToMakeSureUserWantsToLeave = (location, a) => {
    if (location.pathname === "/") {
        return 'Are you sure you want to leave this page?';
    }
};

export default checkToMakeSureUserWantsToLeave;