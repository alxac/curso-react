import PropTypes from "prop-types";
import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`tarefa ${task.isCompleted && "line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool,
      description: PropTypes.string,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;
