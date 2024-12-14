import { serveDir } from "@std/http";

if (import.meta.main) {
  Deno.serve((request) => serveDir(request));
}
