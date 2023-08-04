import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex gap-12">
        <div className="font-bold ">Sociolla</div>
        <div>Browse All</div>
      </div>
      <div className="flex items-center gap-12">
        <div>Sign In</div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};
