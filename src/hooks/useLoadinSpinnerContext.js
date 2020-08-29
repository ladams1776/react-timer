import { useContext } from 'react';
import { LoadinSpinnerActionsContext, LoadinSpinnerContext } from '../contexts/LoadinSpinnerContext';

const useIsLoadinContext = () => useContext(LoadinSpinnerContext);
const useSetIsLoadinContext = () => useContext(LoadinSpinnerActionsContext);

const useLoadinSpinnerContext = () => {
  const isLoadin = useIsLoadinContext();
  const setIsLoadin = useSetIsLoadinContext();

  return { isLoadin, setIsLoadin };
};

export default useLoadinSpinnerContext;
