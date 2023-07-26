import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import ShareWidget from "./components/ShareWidget";
import UserWidget from "./components/UserWidget";

const App: Component = () => {
  return (
    <div class="bg-[#EDEDED] h-screen w-screen">
      <nav class="h-[52px] w-full bg-white p-2 flex items-center justify-between">
        <div class="flex items-center ">
          <span class="h-9 w-9 rounded-lg border border-[#1d1d1f1f] block mr-2"></span>
          <button class="h-9 w-9 rounded-lg bg-[#F2F2F2] flex items-center justify-center p-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2517 8.30741C17.255 8.71491 17.1784 10.1607 16.1375 10.4599L10.8825 11.9707L8.48254 16.8832C8.00754 17.8566 6.57004 17.6807 6.34254 16.6216L3.89671 5.21324C3.853 5.01046 3.86541 4.79961 3.93259 4.60335C3.99978 4.4071 4.11921 4.23288 4.27802 4.09943C4.43683 3.96599 4.62903 3.87837 4.83392 3.846C5.03882 3.81364 5.24866 3.83775 5.44087 3.91574L16.2517 8.30741Z"
                stroke="black"
                stroke-width="1.2"
              />
            </svg>
          </button>
        </div>

        <button class="flex items-center  ">
          <span class="text-[13px] text-[#1D1D1F] font-medium ">
            Don's abandoned carts
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83268 8.33333L9.99935 12.5L14.166 8.33333"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div></div>
      </nav>

      <ShareWidget />
      <UserWidget />
    </div>
  );
};

export default App;
