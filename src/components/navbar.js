import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link to='/' className='navbar-brand'>
            MREN
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-lg-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Exercises <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/create'>
                  Create
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/user'>
                  CreateUser
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
