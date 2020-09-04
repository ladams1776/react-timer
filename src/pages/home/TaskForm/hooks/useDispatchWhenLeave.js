import { useEffect } from 'react';

const useDispatchWhenLeave = dispatch => {
    return useEffect(() => {
        window.addEventListener('beforeunload', dispatch);
        return () => {
            window.removeEventListener('beforeunload', dispatch);
        };
    }, [dispatch]);
};

export default useDispatchWhenLeave;
// window.addEventListener("beforeunload", (ev) => {
//     ev.preventDefault();
//     return ev.returnValue = 'Are you sure you want to close?';
// });