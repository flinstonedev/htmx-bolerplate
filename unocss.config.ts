import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig } from "unocss";
import extractorPug from '@unocss/extractor-pug';
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
  extractors: [
    extractorPug()
  ],
  transformers: [transformerVariantGroup()]
});