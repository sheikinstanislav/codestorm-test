export interface TaskType {
  id: number;
  text: string;
}

export interface intitialTasksState {
  tasks: Array<TaskType>;
  isLoading: boolean;
}

export interface initialAuthState {
  accessToken: string | null;
  isLoading: boolean;
  auth: boolean | null;
}
