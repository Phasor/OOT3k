// // components/ScrollLink.tsx
// import Link, { LinkProps } from "next/link";
// import React, { PropsWithChildren } from "react";
// // mirror the props of next/link component


// const ScrollLink = ({ children, ...props }) => {
//   const handleScroll = (e) => {
//     e.preventDefault();
//     //remove everything before the hash
//     const targetId = e.currentTarget.href.replace(/.*\#/, "");
//     const elem = document.getElementById(targetId);
//     window.scrollTo({
//       top: elem?.getBoundingClientRect().top,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <Link {...props} onClick={handleScroll}>
//       {children}
//     </Link>
//   );
// };
// export default ScrollLink;

import React from "react";

const ScrollLink = ({ href, children }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    const offset = elem.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <a href={href} onClick={handleScroll}>
      {children}
    </a>
  );
};

export default ScrollLink;

