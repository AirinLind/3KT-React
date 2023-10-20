import  { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  const { autoScroll } = props;

  return (
    <div className="header" ref={ref.headerRef}>
      <button onClick={() => autoScroll(ref.footerRef)}>Прокрутить к нижней части страницы</button>
    </div>
  );
});

export default Header;