import CircularTextDemo from "./example/circular-text-demo";

import fs from "fs";
import path from "path";

const CircularTextDemoSource = fs.readFileSync(
  path.join(process.cwd(), "registry/example/circular-text-demo.tsx"),
  "utf-8"
);

export const registryExamples = {
  CircularTextDemo: {
    component: CircularTextDemo,
    source: CircularTextDemoSource,
  },
};
