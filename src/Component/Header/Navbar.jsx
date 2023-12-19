import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from '@mui/material/Avatar';
export default function Navbar() {
  return (
    <div className="Navbar">
      <header>
        <nav className="bg-black">
          <div className="container-lg">
            <div className="row justify-content-between ">
              <div className="col-4 left">
                <div className="logo">
                  <img
                    src="img/amazon_PNG25.png"
                    alt=""
                    className="img-fluid w-50"
                  />
                </div>
              </div>
              <div className="col-4 my-3">
                <div className="search d-flex  justify-content-center   ">
                  <input type="text" name="" id="" />
                  <div className="serach-icon bg-warning">
                    <SearchIcon />
                  </div>
                </div>
              </div>
              <div className="col-4 col-3 d-flex justify-content-end align-content-center    ">
                <div className="nav_btn  mt-3 ">
                  <a href="">Signin</a>
                </div>
                <div className="cart mx-5 mt-3 ">
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartIcon id="icon"  />
                  </Badge>
                </div>
                <div className="avtar  mt-3">
                <Avatar alt="Remy Sharp" src="" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
