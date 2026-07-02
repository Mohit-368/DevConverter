import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Palette, Pipette } from "lucide-react";

const ColorConverter = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-[#E1DCC9] flex flex-col items-center justify-center p-6 md:p-12 font-sans selection:bg-[#412D15] selection:text-[#E1DCC9]">
      {/* Main Container */}
      <div className="w-full max-w-2xl flex flex-col my-auto">
        {/* Navigation */}
        <div className="mb-10 self-start">
          <button className="flex items-center text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-300 group font-bold">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <Link to="/">Back to Tools</Link>
          </button>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-3">
            <Palette className="w-4 h-4 opacity-60" />
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">
              Color Suite
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Color <span className="font-bold">Converter</span>
          </h1>
        </div>

        {/* Form */}
        <div className="bg-[#1F150C] border border-[#412D15]/30 rounded-[2rem] p-8 md:p-10 shadow-2xl mb-6">
          <form className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Format */}
              <div className="flex flex-col space-y-2.5">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  Input Format
                </label>

                <div className="relative">
                  <select className="w-full appearance-none bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-4 py-4 text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer">
                    <option>HEX</option>
                    <option>RGB</option>
                    <option>RGBA</option>
                    <option>HSL</option>
                    <option>HSV</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Input */}
              <div className="flex flex-col space-y-2.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  Enter Color
                </label>

                <input
                  type="text"
                  placeholder="#3B82F6"
                  className="w-full bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-5 py-3.5 text-base font-mono tracking-wider transition-all duration-300 placeholder:opacity-20"
                />
              </div>
            </div>

            {/* Color Preview */}
            <div className="bg-[#000000] border border-[#412D15]/30 rounded-xl p-5 flex items-center gap-5">
              <div className="w-20 h-20 rounded-xl bg-[#3B82F6] border border-[#412D15]" />

              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-2">
                  Preview
                </div>

                <div className="font-mono text-lg tracking-widest">#3B82F6</div>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#E1DCC9] text-[#000000] hover:bg-white font-bold text-xs tracking-[0.2em] uppercase py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg group"
            >
              <Pipette className="w-4 h-4 mr-2.5 group-hover:rotate-12 transition-transform duration-500" />
              Convert Color
            </button>
          </form>
        </div>

        {/* Results */}
        <div className="bg-[#1F150C]/50 border border-[#412D15]/20 rounded-[2rem] p-8">
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold mb-6 text-center">
            Converted Formats
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { type: "HEX", value: "-" },
              { type: "RGB", value: "-" },
              { type: "RGBA", value: "-" },
              { type: "HSL", value: "-" },
              { type: "HSV", value: "-" },
            ].map((output, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border border-[#412D15]/20 p-5 rounded-xl flex flex-col space-y-1 hover:border-[#412D15]/60 transition-colors duration-300"
              >
                <span className="text-[9px] uppercase tracking-[0.15em] opacity-40 font-bold">
                  {output.type}
                </span>

                <span className="font-mono text-base tracking-widest opacity-80 break-all">
                  {output.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorConverter;
