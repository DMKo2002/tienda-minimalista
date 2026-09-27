export { middleware } from '@creart/tienda-core/middleware'

// El `config` (matcher) de route-segment tiene que ser un objeto literal en
// este mismo archivo -- Turbopack (default desde Next 16) no puede analizarlo
// en build-time si viene re-exportado de otro paquete ("Next.js can't
// recognize the exported `config` field... It mustn't be reexported").
// Mantener este literal igual al de tienda-core/src/middleware.ts.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
}
