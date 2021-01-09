import React from 'react';
import MultiSelect from 'react-multi-select-component';
import { useTagTransformer } from '../pages/tasks/TaskForm/hooks';

interface InputProp {
  onChange: () => void;
  value: any; //most likely an object (change this)
}

interface MultiSelectProp {
  input: InputProp;
  options: any; // fill this in
  name: string; 
  value: any; // fill this in
  className: string;
}

const MultiSelectAdapter: React.FC<MultiSelectProp> = ({ ...rest }) => {
  const { onChange, value } = rest.input;
  const values = useTagTransformer(value) || [];

  return <MultiSelect {...rest} labelledBy={'Select'} value={values} onChange={onChange} data-test-id="multi-select" />;
};

export default MultiSelectAdapter;
