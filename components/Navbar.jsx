import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/demo">
              Demo
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Task1-5
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" href="/task1">
                Task1
              </Link>
              <Link className="dropdown-item" href="/task2">
                task2
              </Link>
              <Link className="dropdown-item" href="/task3">
                task3
              </Link>
              <Link className="dropdown-item" href="/task4">
                Task4
              </Link>
              <Link className="dropdown-item" href="/task5">
                task5
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Task6-10
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" href="/task6">
                task6
              </Link>
              <Link className="dropdown-item" href="/task7">
                task7
              </Link>
              <Link className="dropdown-item" href="/task8">
                Task8
              </Link>
              <Link className="dropdown-item" href="/task9">
                task9
              </Link>
              <Link className="dropdown-item" href="/task10">
                task10
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
