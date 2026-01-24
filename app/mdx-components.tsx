/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-4xl font-bold mt-10" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold mt-8" {...props} />,
  p: (props) => <p className="leading-7 mt-4" {...props} />,
  img: (props) => <img className="rounded-xl shadow-xl my-8" {...props} />,
};
