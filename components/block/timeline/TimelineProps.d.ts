export type TimelineEntryProps = {
  date: string | null;
  title: string;
  description: string;
};

export type TimelineProps = {
  entries: Array<TimelineEntryProps>;
  title: string;
};
