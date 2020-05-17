const useDispatch = history => {
    return event => {
        if (history.action === 'PUSH') {
            history.push(null, document.title, window.location.href);
        }
    }
}

export default useDispatch;