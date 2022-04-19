import "./heading.scss";

export default function Heading({ children, ...rest }) {
  return (
    <h2 className="heading" {...rest}>
      {children}
    </h2>
  );
}
