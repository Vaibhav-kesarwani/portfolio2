import fs from "fs";
import path from "path";

const registryDir = path.join(process.cwd(), "registry/example");
const outputFile = path.join(process.cwd(), "registry/index.ts");

function toComponentName(file: string) {
  return file
    .replace(/\.(tsx|ts)$/, "")
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function generate() {
  const files = fs
    .readdirSync(registryDir)
    .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));

  let componentImports = "";
  const fsImports = `import fs from "fs";\nimport path from "path";\n\n`;
  let sourceConsts = "";
  let exports = "export const registryExamples = {\n";

  for (const file of files) {
    const name = toComponentName(file);
    const baseName = file.replace(/\.(tsx|ts)$/, "");
    const importPath = `./example/${baseName}`;
    const filePath = `registry/example/${file}`;

    // Component import
    componentImports += `import ${name} from "${importPath}";\n`;

    // Source const
    sourceConsts += `const ${name}Source = fs.readFileSync(
  path.join(process.cwd(), "${filePath}"),
  "utf-8"
);\n\n`;

    // Export mapping
    exports += `  ${name}: {\n`;
    exports += `    component: ${name},\n`;
    exports += `    source: ${name}Source,\n`;
    exports += `  },\n`;
  }

  exports += "};\n";

  const finalContent =
    componentImports +
    "\n" +
    fsImports +
    sourceConsts +
    exports;

  fs.writeFileSync(outputFile, finalContent);

  console.log("✅ Registry generated (fs source mode)!");
}

generate();
