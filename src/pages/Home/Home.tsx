import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../../components/Button/Button';
import { ToDoItem } from '../../components/ToDoItem/ToDoItem';
import { logout } from '../../redux/features/auth/authSlice';
import { getTasks } from '../../redux/features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TaskType } from '../../types/types';
import './Home.scss';

export const Home: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { tasks } = useAppSelector((state) => state.tasks);

  // Get Tasks
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  // Logout method
  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    navigate('/login');
    toast('Logout!');
  };

  return (
    <div className="page page-home">
      <div className="block">
        <h2 className="block__title">Things to do</h2>
        <div className="todo-wrapper">
          {tasks?.map((task: TaskType) => (
            <ToDoItem key={task.id} task={task} />
          ))}
        </div>
        <Button type="button" onClick={logoutHandler} text="Logout" />
      </div>

      {/* Page UI elements(wave) */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1280 111"
      >
        <path
          fill="#E5E5E5"
          fillOpacity=".13"
          fillRule="evenodd"
          d="m0 44.4 42.6667 8.88C85.3333 62.16 170.667 79.92 256 75.48c85.333-4.44 170.667-31.08 256-48.84C597.333 8.88 682.667 0 768 0s170.667 8.88 256 24.42c85.33 15.54 170.67 37.74 213.33 48.84l42.67 11.1V111H0V44.4Z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1280 111"
      >
        <path
          fill="#20DF7F"
          fillOpacity=".09"
          fillRule="evenodd"
          d="m0 0 53 4.17052C107 8.34104 213 16.6821 320 30.7977c107 14.4364 213 34.9682 320 39.1387 107 4.1705 213-8.341 320-12.1907 107-4.1706 213 0 267 1.9248l53 1.9249V111H0V0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
