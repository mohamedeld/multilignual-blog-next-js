import Link from "next/link";
import React from "react";
import PaddingContainer from "../layouts/padding-container";

const Navigation = () => {
  return (
    <PaddingContainer>
      <div className="border-b">
        <div className="py-6 flex items-center justify-between ">
          <Link href="/">Explore</Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <Link href="/cities">Cities</Link>
              </li>
              <li>
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Navigation;
