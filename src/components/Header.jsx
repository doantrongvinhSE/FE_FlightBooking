import React from "react";
import { Button } from "antd";

import { FaRegCircleUser } from "react-icons/fa6";
import { SiTurkishairlines } from "react-icons/si";


function Header() {
  return (
    <>
      {/* Header */}
      <header className="flex items-center drop-shadow-xl justify-between px-8 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <a
            href="/"
            className="text-2xl flex gap-3 items-center font-bold text-red-500"
          >
            <SiTurkishairlines />
            Vietnam Airlines
          </a>
        </div>
        <div className="flex items-center">
            <FaRegCircleUser className="text-2xl text-red-600"/>
            <Button className="border-none text-red-600 font-medium text-lg shadow-none">Đăng nhập / Đăng ký</Button>

        </div>
      </header>
    </>
  );
}

export default Header;
