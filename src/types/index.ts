export type ToDo = {
  id: number;
  title: string;
  status: boolean;
  isEditing: boolean;
};

export interface Props {
  todo: any;
}
