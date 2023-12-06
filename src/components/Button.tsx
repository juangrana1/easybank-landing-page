export default function Button(props: { parentClass: string }) {
  return (
    <a
      href="#"
      className={`button${props.parentClass ? ` ${props.parentClass}__button` : ""}`}
    >
      <div
        className={`button__link${
          props.parentClass ? ` ${props.parentClass}__button__link` : ""
        }`}
      >
        Request Invite
      </div>
    </a>
  );
}
