export type EntryProps = {
  date: string | null;
  title: string;
  description: string;
  order: number;
  isFirst: boolean;
  isLast: boolean;
  revealLine?: boolean;
  isInView: (isInView: boolean, order: number) => void;
};
