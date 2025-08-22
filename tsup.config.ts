import { Options, defineConfig } from "tsup";

export const commonOptions: Options = {
  entry: ["src/index.ts"],
  target: "esnext",
  dts: false,
  clean: true,
  sourcemap: true,
  bundle: true,
  minify: false,
  tsconfig: "./tsconfig.json",
};

export const packageBuildOptions: Options[] = [
  {
    ...commonOptions,
    format: ["cjs"],
    outDir: "dist/cjs",
    outExtension: () => ({
      js: ".cjs",
      dts: ".d.ts",
    }),
  },
  {
    ...commonOptions,
    format: ["esm"],
    outDir: "dist/esm",
    outExtension: () => ({
      js: ".mjs",
      dts: ".d.ts",
    }),
  },
];

export default defineConfig(packageBuildOptions);
