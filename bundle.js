const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./index.ts"],
    bundle: true,
    format: "esm",
    outfile: "dist/bundle.js",
  })
  .catch(() => process.exit(1));
