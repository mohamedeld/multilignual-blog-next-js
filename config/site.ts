export interface SiteConfig {
  siteName: string;
  description: string;
  currentelyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };
}
const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and cities around the world",
  currentelyAt: "Budapest",
  socialLinks: {
    twitter: "http://twitter.com",
    youtube: "http://youtube.com",
    github: "http://github.com",
    linkedin: "http://linkedin.com",
    instagram: "http://instagram.com",
    facebook: "http://facebook.com",
  },
};
export default siteConfig;
