import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, HardDrive, Database } from "lucide-react";

const DataStorageConverter = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-[#E1DCC9] flex flex-col items-center justify-center p-6 md:p-12 font-sans selection:bg-[#412D15] selection:text-[#E1DCC9]">
      {/* --- Main Content Container --- */}
      <div className="w-full max-w-2xl flex flex-col my-auto">
        {/* Navigation */}
        <div className="mb-10 self-start">
          <button className="flex items-center text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-300 group font-bold">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <Link to="/">Back to Tools</Link>
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-3">
            <Database className="w-4 h-4 text-[#E1DCC9] opacity-60" />
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">
              Storage Suite
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Data Storage <span className="font-bold">Converter</span>
          </h1>
        </div>

        {/* Form Block */}
        <div className="bg-[#1F150C] border border-[#412D15]/30 rounded-[2rem] p-8 md:p-10 shadow-2xl mb-6">
          <form className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Unit Selection */}
              <div className="flex flex-col space-y-2.5 sm:col-span-1">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  From Unit
                </label>
                <div className="relative">
                  <select className="w-full appearance-none bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-4 py-4 text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer">
                    <option value="b">Bytes (B)</option>
                    <option value="kb">Kilobytes (KB)</option>
                    <option value="mb">Megabytes (MB)</option>
                    <option value="gb">Gigabytes (GB)</option>
                    <option value="tb">Terabytes (TB)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Value Input */}
              <div className="flex flex-col space-y-2.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  Enter Storage Amount
                </label>
                <input
                  type="text"
                  placeholder="e.g., 1024"
                  className="w-full bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-5 py-3.5 text-base font-mono tracking-wider transition-all duration-300 placeholder:opacity-20"
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              type="submit"
              className="w-full bg-[#E1DCC9] text-[#000000] hover:bg-white font-bold text-xs tracking-[0.2em] uppercase py-4.5 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg group"
            >
              <HardDrive className="w-4 h-4 mr-2.5 opacity-80 group-hover:rotate-12 transition-transform duration-500" />
              Convert Units
            </button>
          </form>
        </div>

        {/* Results Panel */}
        {/* Results Panel */}
        <div className="bg-[#1F150C]/50 border border-[#412D15]/20 rounded-[2rem] p-8">
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold mb-6 text-center">
            Calculated Values
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { type: "Bit (b)", value: "-" },
              { type: "Nibble", value: "-" },
              { type: "Byte (B)", value: "-" },
              { type: "Kilobyte (KB)", value: "-" },
              { type: "Kibibyte (KiB)", value: "-" },
              { type: "Megabyte (MB)", value: "-" },
              { type: "Mebibyte (MiB)", value: "-" },
              { type: "Gigabyte (GB)", value: "-" },
              { type: "Gibibyte (GiB)", value: "-" },
              { type: "Terabyte (TB)", value: "-" },
              { type: "Tebibyte (TiB)", value: "-" },
              { type: "Petabyte (PB)", value: "-" },
            ].map((output, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border border-[#412D15]/20 p-5 rounded-xl flex flex-col space-y-1 hover:border-[#412D15]/60 transition-colors duration-300"
              >
                <span className="text-[9px] uppercase tracking-[0.15em] opacity-40 font-bold">
                  {output.type}
                </span>
                <span className="font-mono text-base tracking-widest opacity-80">
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

export default DataStorageConverter;
