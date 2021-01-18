import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTagById } from 'redux/actionCreators/actions';

const useFetchTagByIdDispatch = (tagId: string): void => {
  const dispatch = useDispatch();

  return React.useEffect(() => {
    dispatch(fetchTagById(tagId));
  }, [tagId]);
};

export default useFetchTagByIdDispatch;