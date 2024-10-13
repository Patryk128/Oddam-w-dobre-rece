import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Umożliwia udostępnienie hosta w sieci lokalnej
    open: true, // Automatycznie otwiera aplikację w przeglądarce
  },
});
