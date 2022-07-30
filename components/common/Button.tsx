interface Iprops {
  title: string;
  icon?: JSX.Element;
}
export const Button = (props: Iprops) => {
  const { title, icon } = props;
  return (
    <button>
      {icon || null}
      {title}
    </button>
  );
};
