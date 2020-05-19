import React from 'react';
import DeleteButton from './DeleteButton/DeleteButton';
import DownloadButton from './DownloadButton/DownloadButton';
import NewButton from './NewButton/NewButton';

const ControlButtons = () => {
  return (
    <div data-test-id="control-buttons">
      <DeleteButton />
      <DownloadButton />
      <NewButton />
    </div>
  )
};

export default ControlButtons;
