// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { BiSolidToTop } from "react-icons/bi";

export default function ScrollToTop() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div style={{ display: "inline-block" }}>
      <BiSolidToTop
        onClick={() => window.scrollTo(0, 0)}
        className={"scrollbtn"}
      />
    </div>
  );
}
