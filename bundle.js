import esbuild from "esbuild";
import esbuildPluginTsc from "esbuild-plugin-tsc";

esbuild
  .build({
    entryPoints: ["./index.ts"],
    bundle: true,
    format: "esm",
    platform: "neutral",
    outfile: "dist/bundle.js",
    plugins: [
      esbuildPluginTsc({
        tsconfigPath: "./tsconfig.json", // Explicitly specify the tsconfig path
        force: true,
      }),
    ],
  })
  .catch(() => process.exit(1));
