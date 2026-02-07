import fs from "fs";
import path from "path";

const REGISTRY_FOLDERS = [
  {
    dir: "registry/example",
    importBase: "./example",
  },
  {
    dir: "registry/components",
    importBase: "./components",
  },
];

const outputFile = path.join(process.cwd(), "registry/index.ts");

function toComponentName(file: string) {
  return file
    .replace(/\.(tsx|ts)$/, "")
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function generate() {
  let componentImports = "";
  let sourceConsts = "";
  let exports = "export const registryExamples = {\n";

  const fsImports = `
import fs from "fs";
import path from "path";

`;

  for (const folder of REGISTRY_FOLDERS) {
    const registryDir = path.join(process.cwd(), folder.dir);

    if (!fs.existsSync(registryDir)) continue;

    const files = fs
      .readdirSync(registryDir)
      .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));

    for (const file of files) {
      const name = toComponentName(file);
      const baseName = file.replace(/\.(tsx|ts)$/, "");

      const importPath = `${folder.importBase}/${baseName}`;
      const filePath = `${folder.dir}/${file}`;

      // Import component
      componentImports += `import ${name} from "${importPath}";\n`;

      // Read source
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
  }

  exports += "};\n";

  const finalContent =
    componentImports + "\n" + fsImports + sourceConsts + exports;

  fs.writeFileSync(outputFile, finalContent);

  console.log("✅ Registry generated (examples + components)!");
}

generate();
