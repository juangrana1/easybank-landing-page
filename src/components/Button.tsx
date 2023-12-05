export default function Button(props: { elementBlock?: string }) {
  return (
    <a
      href="#"
      className={`button${props.elementBlock ? ` ${props.elementBlock}__button` : ""}`}
    >
      <div
        className={`button__link${
          props.elementBlock ? ` ${props.elementBlock}__button__link` : ""
        }`}
      >
        Request Invite
      </div>
    </a>
  );
}
