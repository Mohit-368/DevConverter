import React from "react";
import { Link } from "react-router-dom";
import { Binary, HardDrive, Palette, QrCode, ArrowRight } from "lucide-react";

const LandingPage = () => {
  const tools = [
    {
      id: "number-system",
      name: "Number System Converter",
      url: "/number-system",
      description:
        "Seamlessly translate between binary, decimal, octal, and hexadecimal values.",
      icon: <Binary strokeWidth={1.5} className="w-8 h-8 text-[#E1DCC9]" />,
    },
    {
      id: "data-storage",
      name: "Data Storage Converter",
      url: "/data-storage",
      description:
        "Calculate bytes, kilobytes, megabytes, and beyond with absolute precision.",
      icon: <HardDrive strokeWidth={1.5} className="w-8 h-8 text-[#E1DCC9]" />,
    },
    {
      id: "color-converter",
      name: "Color Converter",
      url: "/color-converter",
      description:
        "Transform HEX to RGB, HSL, and CMYK for perfect front-end styling.",
      icon: <Palette strokeWidth={1.5} className="w-8 h-8 text-[#E1DCC9]" />,
    },
    {
      id: "qr-generator",
      name: "URL to QR Code",
      url: "/qr-generator",
      description:
        "Instantly generate high-quality, scannable QR codes from any web address.",
      icon: <QrCode strokeWidth={1.5} className="w-8 h-8 text-[#E1DCC9]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#E1DCC9] flex flex-col items-center justify-center p-6 md:p-12 font-sans selection:bg-[#412D15] selection:text-[#E1DCC9]">
      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-6 mb-20 mt-10">
        <div className="inline-block px-3 py-1 rounded-full border border-[#412D15] bg-[#1F150C] text-sm tracking-widest uppercase mb-4 opacity-80">
          Developer Essentials
        </div>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Dev <span className="font-bold">Converter</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-70 font-light leading-relaxed">
          A minimalist suite of conversion tools designed for developers. No
          clutter, just exactly what you need to keep building.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full pb-20">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="group relative bg-[#1F150C] border border-[#1F150C] hover:border-[#412D15] rounded-2xl p-8 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:-translate-y-1"
          >
            {/* Subtle background glow effect on hover using the 20% color */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#412D15]/0 to-[#412D15]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-[#000000] p-4 rounded-xl w-fit mb-6 border border-[#412D15]/30">
                {tool.icon}
              </div>

              <h2 className="text-2xl font-semibold mb-3 tracking-wide">
                {tool.name}
              </h2>

              <p className="opacity-60 leading-relaxed mb-8 flex-grow">
                {tool.description}
              </p>

              <div className="flex items-center text-sm font-medium tracking-wider uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={tool.url} className="flex items-center">
                  Launch Tool
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
