import axios from 'axios';
import React, { useState } from 'react';
import moment from 'moment';
import toast from 'react-hot-toast';
import classes from './TaskItem.module.scss';

function TaskItem({ task, deleteTask }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckBoxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/tasks/${task._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success('Task Updated Successfully');
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <tr className={classes.task_item}>
      <td className={classes.task_name}>
        <div className={classes.checkbox} role="checkbox" aria-checked onChange={handleCheckBoxClick} disabled={isLoading}>
          <input type="checkbox" checked={isCompleted} tabIndex={-1} readOnly disabled={isLoading} />
        </div>
        <p>{task.title}</p>
      </td>
      <td>{isCompleted ? 'Completed' : 'Incomplete'}</td>
      <td>{moment(task.createdAt).format('MMM Do yy')}</td>
      <td>
        <button
          className={classes.deleteBtn}
          type="button"
          onClick={() => deleteTask(task._id)}
        >
          Delete

        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
