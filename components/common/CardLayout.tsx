interface Iprops {
  children: JSX.Element;
}
export const CardLayout = (props: Iprops) => {
  return <section className="card-layout">{props.children}</section>;
};
