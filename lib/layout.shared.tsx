import Logo from "@/components/common/logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      transparentMode: "top",
    },
    githubUrl: "https://github.com/Vaibhav-kesarwani",
  };
}
