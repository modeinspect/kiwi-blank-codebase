import React from "react";

interface LoremIpsumBoxProps {
  displayed: boolean;
}

export default function LoremIpsumBox({ displayed }: LoremIpsumBoxProps) {
  if (!displayed) {
    return null;
  }

  const paragraphs = [
    "Lorem ip",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    " sint "
  ];

  return (
    <div className="mt-8 w-[length:400px] max-w-lg mx-auto flex flex-row flex-col grid-rows-3 items-center justify-center">
      <div className="bg-white rounded-lg border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 grid">
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 grid">
          <h3 className="text-gray-800 font-semibold text-lg">Sample Text</h3>
        </div>
        <div className="p-6 text-gray-700 leading-relaxed flex-row block">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="left-[length:auto] mb-4 absolute bottom-[length:100px] pl-[length:11px] pr-[length:11px] ml-[length:0px] pt-[length:355px] pb-[length:355px] top-[length:73px]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
