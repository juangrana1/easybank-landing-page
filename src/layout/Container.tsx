export default function Container(props: {
  children: React.ReactNode;
  parentClass: string;
}) {
  return (
    <div className={`container ${props.parentClass}__container`}>
      {props.children}
    </div>
  );
}
