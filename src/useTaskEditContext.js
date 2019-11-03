import { useContext } from "react";
import TaskEditFormContext from "./TaskEditFormContext";

const useTaskEditContext = () => useContext(TaskEditFormContext);

export default useTaskEditContext;
