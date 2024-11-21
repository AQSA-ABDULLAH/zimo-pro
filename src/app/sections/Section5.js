import React from 'react';

export default function Section5() {
  return (
    <div className="relative min-h-[750px] flex flex-col px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: 'url("images/ship image.jpg")' }}
      ></div>

      {/* Content */}
      <div className="z-10 text-white">
        <div className="flex justify-end px-10 py-12">
          <div className="flex flex-col">
            <p className="text-[28px] max-w-[420px] mb-5 font-medium leading-8 tracking-widest">
              Personalised for You
            </p>
            <p className="text-[14px] max-w-[350px] text-justify leading-8 tracking-widest opacity-60">
              Delivering thousands of personalized alerts every day so the USER can be first in line when the opportunity of a lifetime is here.
            </p>
          </div>
        </div>

        <div className="mt-28 flex justify-between items-center">
          <img
            src="/images/zimo-logo-white.png"
            alt="Zimo Logo"
            className="w-[400px] opacity-10"
          />
          <p className='tracking-widest'>CREATE USER ID</p>
        </div>

      </div>

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}
