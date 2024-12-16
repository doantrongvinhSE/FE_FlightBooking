import React from "react";
import { Button } from "antd";
import { IoMdSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-white">
        <header className="flex items-center max-w-7xl mx-auto  justify-between px-8 py-6 bg-white">
          <div className="flex items-center space-x-2">
            <a
              href="/"
              className="text-2xl flex gap-3 items-center font-bold text-green-500"
            >
              <img
                src="https://www.bambooairways.com/o/wpbav-home-theme/css/assets/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex space-x-10 text-base items-center text-gray-600 font-medium">
            <a href="">Khám phá</a>
            <a href="">Đặt vé</a>
            <a href="">Thông Tin Hành Trình</a>
            <a href="">Bamboo Club</a>
          </div>
          <div className="flex-col items-center">
            <div className="flex text-sm text-[#334054] space-x-2 items-center">
              <p className="flex items-center space-x-2">
                <IoMdSearch />
                Trợ giúp
              </p>
              <p>|</p>
              <TbWorld />

              <p>Việt Nam • Tiếng Việt</p>
            </div>
            <button className="border-none flex space-x-2 float-right items-center text-lg shadow-none">
              <p className="text-[#00558F]">Đăng nhập</p>
              <p>|</p>
              <FaRegCircleUser className="text-2xl text-[#00558F]" />
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
