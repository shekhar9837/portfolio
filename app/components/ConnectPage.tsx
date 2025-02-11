'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from 'styled-components';

const ConnectPage = () => {

  const Button = () => {
    return (
      <StyledWrapper>
        <button>
          Get in touch
          <div className="star-1">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
          <div className="star-6">
            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs />
              <g id="Layer_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
              </g>
            </svg>
          </div>
        </button>
      </StyledWrapper>
    );
  }
  
  const StyledWrapper = styled.div`
    button {
      position: relative;
      padding: 12px 35px;
      background: #4c83fa;
      font-size: 17px;
      font-weight: 1000;
      color: #ffffff;
      border: 3px solid #4c83fa;
      border-radius: 8px;
      box-shadow: 0 0 0 #ffffff;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
  
    .star-1 {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }
  
    .star-2 {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 1scubic-bezier(0, 0.4, 0, 1.01);
    }
  
    .star-3 {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }
  
    .star-4 {
      position: absolute;
      top: 20%;
      left: 40%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
    }
  
    .star-5 {
      position: absolute;
      top: 25%;
      left: 45%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
    }
  
    .star-6 {
      position: absolute;
      top: 5%;
      left: 50%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0 #4c83fa);
      z-index: -5;
      transition: all 0.8s ease;
    }
  
    button:hover {
      background: transparent;
      color: #4c83fa;
      box-shadow: 0 0 0px #4c83fa;
    }
  
    button:hover .star-1 {
      position: absolute;
      top: -80%;
      left: -30%;
      width: 25px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    button:hover .star-2 {
      position: absolute;
      top: -0%;
      left: 10%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    button:hover .star-3 {
      position: absolute;
      top: 55%;
      left: 25%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    button:hover .star-4 {
      position: absolute;
      top: 30%;
      left: 80%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    button:hover .star-5 {
      position: absolute;
      top: 25%;
      left: 115%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    button:hover .star-6 {
      position: absolute;
      top: 5%;
      left: 60%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 0px #4c83fa);
      z-index: 2;
    }
  
    .fil0 {
      fill: #4c83fa;
    }`;
  
  


  return (
    <div className="relative z-50 max-w-7xl flex items-center justify-center ">
      <Image
        src={"/wp4083639-mount-wallpapers.jpg"}
        width={1920}
        height={1080}
        alt="lets connect"
        className="h-[70vh]    "
      />

      <div className="absolute left-0 md:top-44 top-20 custom:px-6 px-6 flex custom:flex-row flex-col  custom:items-center items-start justify-between">
        <h3 className="custom:w-1/2 font-semibold text-[3rem] text-white">
          Lets connect
        </h3>

        <div className="custom:w-1/2 ">
        <p className="font-semibold text-white">
  Looking for a creative partner to refine your brand, explore new ideas, or brainstorm together? Let's connect and collaborate.
</p>


          <div className="flex items-start justify-start w-full mt-8">
            <Link href='https://www.x.com/shekhar9837 ' target="_blank" >
            {/* <button
              type="submit"
              className="flex  gap-2   font-ptmono text-white  z-10 custom:px-4 py-2 overflow-hidden rounded-md group"
            >
              CONTACT
              <svg
                className="w-7 h-7 justify-end group-hover:rotate-90 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-slate-200 p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-100 group-hover:fill-gray-200"
                  />
              </svg>
            </button> */}
            <Button />
                  </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
