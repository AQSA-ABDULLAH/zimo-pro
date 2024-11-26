import React from 'react';

export default function Section7() {
  return (
    <div className="min-h-screen flex items-center border border-black px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Partner Image */}
        <img
          src="/images/partner.png"
          alt="Partner"
          className="w-[150px] md:w-[250px]  object-contain"
        />

        {/* Companies Image */}
        <img
          src="/images/companies.png"
          alt="Companies"
          className="w-[150px] md:w-[250px] object-contain"
        />
      </div>
    </div>
  );
}

