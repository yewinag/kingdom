interface Iprops {
  title: string;
  icon?: JSX.Element;
  className?: string;
}
export const Button = (props: Iprops) => {
  const { title, icon, className } = props;
  return (
    <button className={className} aria-label={title}>
      {icon || null}
      {title}
    </button>
  );
};
