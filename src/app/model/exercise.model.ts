
export class Exercise {
  id: string;
  name: any;
  duration: number;
  calories: number;
  level: string;
  date?: Date;
  state?: 'completed' | 'cancelled' | null;
}
