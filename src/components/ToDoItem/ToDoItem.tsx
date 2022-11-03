import { FC } from 'react';
import './ToDoItem.scss';
import { ToDoItemProps } from './ToDoItem.types';

export const ToDoItem: FC<ToDoItemProps> = ({ task }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__id">{task.id}.</span>
      <p className="todo-item__text">{task.text}</p>
    </div>
  );
};
