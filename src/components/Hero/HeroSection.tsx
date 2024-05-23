"use client";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import Blockchains from "../Blockchains/Blockchains";

const logos = [
  {
    name: "Chainlink",
    url: "https://assets-global.website-files.com/5f6b7190899f41fb70882d08/5f760a499b56c47b8fa74fbb_chainlink-logo.svg",
  },
];

const HeroSection = () => {
  return (
    <>
      <div
        className="h-auto md:h-[40rem] w-full rounded-md 
    flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 "
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1
            className="mt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text
        text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            Master the art of Blockchain
          </h1>
          <p
            className="mt-4 font-normal text-base md:text-lg
        text-neutral-300 max-w-lg mx-auto"
          >
            Dive into our comprehensive blockchain courses and transform your
            blockchain journey today.Whether you are beginner or looking to
            refine your skills ,join us to unlock your true potential
          </p>

          <div className="mt-4">
            <div>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full py-12 text-white">
          <div className="mx-auto w-full px-4 md:px-8 ">
            <div
              className="group relative mt-6 flex gap-6 overflow-hidden p-2 "
              style={{
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
              }}
            >
              {Array(5)
                .fill(null)
                .map((index) => (
                  <div
                    key={index}
                    className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 "
                  >
                    {logos.map((logo, key) => (
                      <img
                        key={key}
                        src={logo.url}
                        className="h-10 w-28 px-2 brightness-100 text-white"
                        alt={`${logo.name}`}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Blockchains />
      </div>
    </>
  );
};

export default HeroSection;
