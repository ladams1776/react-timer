import { useCallback } from 'react';
import { useFlashMessageContext, useBrowserHistory } from 'hooks';

const useFormDispatch = dispatch => {
  const { push } = useBrowserHistory();
  const {
    setSuccessFlashMessage,
    setErrorFlashMessage,
  } = useFlashMessageContext();

  return useCallback(data => {
    if (data._id) {
      setSuccessFlashMessage('Successfully Added/Edited a Task');
    } else {
      setErrorFlashMessage('Failed to Add/Edit a Task');
    }

    dispatch(data);
    push(`/task/${data._id}`);
  }, []);
};

export default useFormDispatch;
