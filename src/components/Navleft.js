import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavLink,NavItem,Nav} from 'reactstrap';

export default class LeftNav extends Component {
    render() {
        return (
            <div>
        <Navbar light>
          <NavbarBrand href="/"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink href="/"><i class="fa fa-address-book-o" aria-hidden="true"></i> Attendance</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/"><i class="fa fa-cutlery" aria-hidden="true"></i> Meal Manage</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/"><i class="fa fa-money" aria-hidden="true"></i> Cost Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"> <i class="fa fa-child" aria-hidden="true"></i> Students Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><i class="fa fa-money" aria-hidden="true"></i> Students Payment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"> <i class="fa fa-users" aria-hidden="true"></i> Employee Manage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><i class="fa fa-usd" aria-hidden="true"></i> Vendor Payment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><i class="fa fa-rupee"></i> Bill Manange</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"> <i class="fa fa-newspaper-o" aria-hidden="true"></i> Notice Board</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><i class="fa fa-cog" aria-hidden="true"></i> Settings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><i class="fa fa-server" aria-hidden="true"></i> Setup</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
        )
    }
}
