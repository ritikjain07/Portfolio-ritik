import React from "react";
import "../../../css/Css.css";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function Index() {
  return (
    <div id="contact" className="text-3xl flex border-t-2 border-white/20 pt-10 mb-10 w-[80vw] h-[80vh]">
      <div className="bg-white/5 backdrop-blur-lg flex flex-row text-center px-4 py-6 w-full rounded-2xl h-full backimg">
        <div className="h-full uppercase font-extrabold text-[5vw] w-[50%] text-start leading-snug mt-5">
          Let's connect and collaborate!
        </div>
        <div className="bg-blurMy py-4 px-4 w-[50%] rounded-lg flex flex-col border-white/20 gap-2">
          <a href="mailto:ritikjain4560gmail.com">
            <div className="button flex gap-5   border-2 px-2 py-4 rounded-md border-white/20 font-bold  items-center justify-evenly ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
              >
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
              </svg>
              Gmail
            </div>
          </a>
          <a href="https://github.com/ritikjain07">
            <div className="button flex gap-5   border-2 px-2 py-4 rounded-md border-white/20 font-bold  items-center justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.325 3.438 9.822 8.205 11.387.6.11.82-.26.82-.577v-2.24c-3.338.726-4.04-1.61-4.04-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.834 2.805 1.304 3.49.998.108-.775.42-1.304.764-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.223-.124-.303-.535-1.526.116-3.177 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.006-.403c1.02.004 2.045.137 3.006.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.651.243 2.874.12 3.177.77.84 1.234 1.913 1.234 3.223 0 4.61-2.806 5.623-5.475 5.92.43.37.815 1.1.815 2.22v3.293c0 .32.218.694.824.576C20.565 21.818 24 17.323 24 12c0-6.628-5.373-12-12-12z" />
              </svg>
              GitHub
            </div>
          </a>
          <a href="https://www.linkedin.com/in/ritik--jain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <div className="button flex gap-5   border-2 px-2 py-4 rounded-md border-white/20 font-bold  items-center justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 50 50"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
              </svg>
              LinkedIn
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;

/* CSS (Add this to your CSS file) */