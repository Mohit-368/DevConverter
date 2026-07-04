import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeft, ChevronDown, Cpu, Sparkles } from "lucide-react";

const NumberSystemConverter = () => {
  const [result, setResult] = useState(null);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      fromBase: "decimal",
      number: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/convert/number/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            number: data.number.trim(),
            from_base: data.fromBase,
          }),
        },
      );

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (!response.ok) {
        alert(JSON.stringify(responseData));
        return;
      }

      setResult(responseData);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to the server.");
    }
  };

  const outputs = [
    {
      type: "Decimal (Base 10)",
      value: result?.decimal ?? "-",
    },
    {
      type: "Binary (Base 2)",
      value: result?.binary ?? "-",
    },
    {
      type: "Octal (Base 8)",
      value: result?.octal ?? "-",
    },
    {
      type: "Hexadecimal (Base 16)",
      value: result?.hexadecimal ?? "-",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#E1DCC9] flex flex-col items-center justify-center p-6 md:p-12 font-sans selection:bg-[#412D15] selection:text-[#E1DCC9]">
      <div className="w-full max-w-2xl flex flex-col my-auto">
        {/* Back Button */}
        <div className="mb-10 self-start">
          <button className="flex items-center text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity duration-300 group font-bold">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <Link to="/">Back to Tools</Link>
          </button>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-3">
            <Sparkles className="w-4 h-4 text-[#E1DCC9] opacity-60" />
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50 font-bold">
              System Suite
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Number System <span className="font-bold">Converter</span>
          </h1>
        </div>

        {/* Form */}
        <div className="bg-[#1F150C] border border-[#412D15]/30 rounded-[2rem] p-8 md:p-10 shadow-2xl mb-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Select Base */}
              <div className="flex flex-col space-y-2.5">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  Select Base
                </label>

                <div className="relative">
                  <select
                    {...register("fromBase")}
                    className="w-full appearance-none bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-4 py-4 text-xs font-semibold tracking-wider uppercase"
                  >
                    <option value="decimal">Decimal</option>
                    <option value="binary">Binary</option>
                    <option value="octal">Octal</option>
                    <option value="hexadecimal">Hexadecimal</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Number Input */}
              <div className="flex flex-col space-y-2.5 sm:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold pl-1">
                  Enter Input Value
                </label>

                <input
                  type="text"
                  placeholder="e.g., 255"
                  {...register("number", {
                    required: true,
                    validate: (value) => value.trim() !== "" || "Required",
                  })}
                  className="w-full bg-[#000000] border border-[#412D15]/60 hover:border-[#412D15] focus:border-[#E1DCC9]/40 focus:outline-none rounded-xl px-5 py-3.5 text-base font-mono tracking-wider placeholder:opacity-20"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E1DCC9] text-[#000000] hover:bg-white font-bold text-xs tracking-[0.2em] uppercase py-4 rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
            >
              <Cpu className="w-4 h-4 mr-2" />
              {isSubmitting ? "Converting..." : "Run Conversion"}
            </button>
          </form>
        </div>

        {/* Result Panel */}
        <div className="bg-[#1F150C]/50 border border-[#412D15]/20 rounded-[2rem] p-8">
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 font-bold mb-6 text-center">
            Output Stream
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outputs.map((output, idx) => (
              <div
                key={idx}
                className="bg-[#000000] border border-[#412D15]/20 p-5 rounded-xl"
              >
                <span className="text-[9px] uppercase tracking-[0.15em] opacity-40 font-bold">
                  {output.type}
                </span>

                <div className="font-mono text-lg mt-2 break-all">
                  {output.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSystemConverter;
