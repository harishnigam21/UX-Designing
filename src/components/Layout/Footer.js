import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          2023 UX Designing course, source on<SourceLink>Netsil</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
