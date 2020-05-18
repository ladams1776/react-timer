import useBrowserHistoryPush from 'hooks/useBrowserHistoryPush';

const useDispatch = () => {
    const { action, push } = useBrowserHistoryPush();
    return () => {
        if (action === 'POP') {
            push(null, document.title, window.location.href);
        }
    }
}


export default useDispatch;