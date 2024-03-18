import React from 'react';
import Nav from "@/components/nav";
import MobileNav from "@/components/mobileNav";

const HomePage = () => {
  const [nav, setNav] = React.useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav}/>
      </div>
    </div>
  );
}

export default HomePage;