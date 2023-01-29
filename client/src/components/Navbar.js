import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  return (
    <div className=" bg-pink-500  md:bg-[#004393] w-full font-sans ">
      <img
        className="w-full"
        src="https://res.cloudinary.com/dyfc6ffal/image/private/s----FFUJWh--/v1674897873/news/aml3uahzfhqnpjv4vp8o.png"
        alt="nav1"
      />
      <div className=" max-w-6xl m-auto  w-[87.5%] ">
        <div className="flex justify-between py-6  ">
          <img
            className="logo"
            src="https://res.cloudinary.com/dyfc6ffal/image/private/s--ZD2PhP_K--/v1674897861/news/h3zqajaaafkno6cnpema.png"
            alt="logo"
          />

          <div className="flex items-center ">
            <AiOutlineSearch color="white" size="2em" />
            <RxHamburgerMenu
              color="black"
              size="2.5em"
              className="bg-white  ml-5 p-1 md:bg-[#f8f900] "
            />
          </div>
        </div>

        <ul className="hidden md:flex md:flex-wrap pb-6 ">
          <li className="mr-[4rem]">
            <a className="text-white " href="#">
              รายการสด
              <span className="bg-red-500 rounded-[2rem] px-[0.75rem] py-[0.25rem] ml-[0.5rem]">
                {" "}
                <span className=" inline-block bg-white w-[6px] h-[6px] rounded-[50%] p-[2px] my-[2px]"></span>{" "}
                Live
              </span>
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white flex " href="#">
              รายการ
              <svg
                className="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white " href="#">
              ผังรายการ{" "}
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white" href="#">
              ศิลปินดารา
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white" href="#">
              เพลง
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white" href="#">
              ข่าวประชาสัมพันธ์
            </a>
          </li>
          <li className="mr-[4rem]">
            <a className="text-white" href="#">
              workpointTODAY
            </a>
          </li>
        </ul>
      </div>

      {/* <img
        className="w-full"
        src="https://res.cloudinary.com/dyfc6ffal/image/private/s--o7N22htr--/v1674897917/news/plkizvttjtb36kq2yutk.png"
      /> */}
    </div>
  );
}

export default Navbar;
