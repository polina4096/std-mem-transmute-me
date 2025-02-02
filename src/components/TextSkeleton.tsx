const minWidth = 48;
const maxWidth = 64;

export function TextSkeleton(props: {
  width?: string;
  max?: number;
  min?: number;
}) {
  // width or any number in px between min and max px
  const width = props.width
    ? props.width
    : `${Math.floor(Math.random() * ((props.max || maxWidth) - (props.min || minWidth) + 1) + (props.min || minWidth))}px`;

  return (
    <div class="h-0.8 bg-text opacity-75" style={{ width }} />
  );
}
