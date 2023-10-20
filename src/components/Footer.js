import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  const { autoScroll } = props;

  const handleScroll = () => {
    autoScroll(ref.headerRef);
  };

  return (
    <footer className="footer" ref={ref.footerRef}>
      <button onClick={handleScroll}>Прокрутить к верхней части страницы</button>
    </footer>
  );
});

export default Footer;