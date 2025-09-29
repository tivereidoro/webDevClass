import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex justify-center p-4 ">
      <div className="container w-full mx-auto flex justify-between items-center px-3">
        <div className="left_content">
          <h1>Your Path to Seamless Financial Transactions</h1>

          <p>
            Unlock the power of effortless payments and transactions with Tpay,
            the ultimate finance app designed exclusively for individuals like
            you.
          </p>

          <button className="bg-green-500 p-3 rounded-2xl">
            Create free account
          </button>

          <div className="download_buttons flex gap-5 mt-5">
            <button className="p-3 rounded-xl flex justify-center items-center gap-2 border-green-400 border-2">
              <span>
                <Image
                  src="/logo/apple_dark.svg"
                  width={20}
                  height={20}
                  alt="App Store"
                />
              </span>
              Download on App Store
            </button>

            <button className="p-3 rounded-xl flex justify-center items-center gap-2 border-green-400 border-2">
              <span>
                <Image
                  src="/logo/android_robot.svg"
                  width={20}
                  height={20}
                  alt="Android"
                />
              </span>
              Download on Android
            </button>
          </div>
        </div>

        <div className="right_content">
          <Image src={"/logo/tpay_face.png"} height={200} width={200} />
        </div>
      </div>
    </div>
  );
}
