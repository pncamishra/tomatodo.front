export type Status = 'done' | 'todo';

export interface Task {
  sub: string;
  createdAt: string;
  title: string;
  status: Status;
  priority: number;
}
