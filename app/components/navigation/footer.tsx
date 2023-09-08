import React from "react";
import PaddingContainer from "../layouts/padding-container";
import siteConfig from "@/config/site";
import Link from "next/link";
import SocailLinks from "../socialMedia/socail-links";

const Footer = () => {
  return (
    <div className="py-6 border-t mt-10">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-neutral-700">
            {siteConfig.description}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-4">
          <div>
            <div className="font-medium">#exploretheword</div>
            <div className="flex items-center gap-3 mt-2 text-neutral-700">
              <SocailLinks
                platform="twitter"
                link={siteConfig.socialLinks.twitter}
              />
              <SocailLinks
                platform="instagram"
                link={siteConfig.socialLinks.instagram}
              />
              <SocailLinks
                platform="facebook"
                link={siteConfig.socialLinks.facebook}
              />
              <SocailLinks
                platform="github"
                link={siteConfig.socialLinks.github}
              />
              <SocailLinks
                platform="linkedin"
                link={siteConfig.socialLinks.linkedin}
              />
              <SocailLinks
                platform="youtube"
                link={siteConfig.socialLinks.youtube}
              />
            </div>
          </div>
          <div>
            <div className="text-sm text-neutral-400">Currently At</div>
            <div className="px-3 py-2 bg-white rounded-md shadow-md flex items-center gap-3">
              <div className="w-2 h-2 rounded-fill bg-emerald-400" />
              {siteConfig.currentelyAt}
            </div>
          </div>
        </div>
        <div className="border-t py-3 flex items-center justify-between flex-wrap gap-4 mt-16">
          <div className="text-sm text-neutral-400">
            All rights are reserved | Copright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made with love by{" "}
            <Link
              className="underline underline-offset-4"
              href="https://www.twitter.com"
            >
              @elrfaay
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
