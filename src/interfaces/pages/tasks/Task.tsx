export interface TaskInterface {
  _id: string;
  description: string;
  projectId: number;
  time: number;
}

export interface DateTimeInterface {
    id: string;
    time: string;
    date: string;
};

export interface EditDateTimeInterface {
    id: string;
    date: string;
    minutes: string;
  };