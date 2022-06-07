const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};
export default Link;
