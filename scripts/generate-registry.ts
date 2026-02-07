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

  let imports = "";
  let exports = "export const registryExamples = {\n";

  for (const file of files) {
    const name = toComponentName(file);
    const importPath = `./example/${file.replace(/\.(tsx|ts)$/, "")}`;

    imports += `import ${name} from "${importPath}";\n`;
    exports += `  ${name},\n`;
  }

  exports += "};\n";

  const content = `${imports}\n${exports}`;

  fs.writeFileSync(outputFile, content);

  console.log("✅ Registry generated!");
}

generate();
