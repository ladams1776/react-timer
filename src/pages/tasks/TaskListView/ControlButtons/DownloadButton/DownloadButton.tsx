import React from 'react';
import cn from 'classnames';
import { TaskInterface } from 'interfaces/pages/tasks/Task';
import { Button } from 'components';
import { writeJsonFile } from './writeJsonFile';
import useTaskAssembler from './useTaskAssembler';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
  tasks: TaskInterface[];
}

const useHandleDownload = (tasks: TaskInterface[]) => {
  const assembleTask = useTaskAssembler(tasks);
  return () => {
    writeJsonFile(assembleTask());
  };
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ tasks }) => {
  const handleDownload = useHandleDownload(tasks);

  return <>{tasks.length || <Button title="Download Tasks" type="a" className={cn(styles.buttonDownload, 'glyphicon glyphicon-download-alt')} onClick={handleDownload} />}</>;
};

export default DownloadButton;
