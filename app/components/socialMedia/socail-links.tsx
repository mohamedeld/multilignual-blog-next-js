import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import React from "react";
interface Props {
  platform: string;
  link: string;
}
const SocailLinks = ({ platform, link }: Props) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size="18" />;
      case "twitter":
        return <Twitter size="18" />;
      case "youtube":
        return <Youtube size="18" />;
      case "instagram":
        return <Instagram size="18" />;
      case "linkedin":
        return <Linkedin size="18" />;
      case "github":
        return <Github size="18" />;
    }
  };
  return <Link href={link}>{getIcon(platform)}</Link>;
};

export default SocailLinks;
