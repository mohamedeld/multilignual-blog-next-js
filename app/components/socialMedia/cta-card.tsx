import Image from "next/image";
import React from "react";

const CTACard = () => {
  return (
    <div className="px-6 py-10 rounded-md bg-slate-100 relative overflow-hidden">
      <div className="absolute z-10 inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      <Image
        className="object-cover object-center"
        src={
          "https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        }
        fill
        alt="Cta card image"
      />
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheword</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          Explore the world with me! I'm travelling around the world I've
          visited most of the great cities and currently I'm travelling in Join
          me!
        </p>
        <form className="mt-6 flex items-center gap-2 w-full">
          <input
            type="text"
            placeholder="enter your email"
            className="text-base bg-white w-full md:w-auto rounded-md py-3 px-4 outline-none focus:ring-2 ring-neutral-600"
          />
          <button className="bg-neutral-900  whitespace-nowrap rounded-md py-2 px-3 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
