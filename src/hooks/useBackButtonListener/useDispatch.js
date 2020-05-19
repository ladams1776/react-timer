import useBrowserHistory from 'hooks/useBrowserHistory';

const useDispatch = () => {
    const { action, push } = useBrowserHistory();
    return () => {
        if (action === 'POP') {
            push(null, document.title, window.location.href);
        }
    }
}


export default useDispatch;