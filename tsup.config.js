import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: true,
	target: 'es2015',
	shims:true,
	splitting: false,
	treeshake:true,
	clean: true,
	bundle:true,
});