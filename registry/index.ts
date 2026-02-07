import CircularTextDemo from "./example/circular-text-demo";
import CircularText from "./components/circular-text";


import fs from "fs";
import path from "path";

const CircularTextDemoSource = fs.readFileSync(
  path.join(process.cwd(), "registry/example/circular-text-demo.tsx"),
  "utf-8"
);

const CircularTextSource = fs.readFileSync(
  path.join(process.cwd(), "registry/components/circular-text.tsx"),
  "utf-8"
);

export const registryExamples = {
  CircularTextDemo: {
    component: CircularTextDemo,
    source: CircularTextDemoSource,
  },
  CircularText: {
    component: CircularText,
    source: CircularTextSource,
  },
};
