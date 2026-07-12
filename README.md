# Fusion House — Web

Landing principal de **Fusion House**, marca de vivienda industrializada de Mediterranean Fusion SL.

## Stack

- HTML estático + CSS (sin JavaScript de framework)
- Imágenes optimizadas en WebP con fallback JPEG
- Tipografía: Fraunces (display) + Inter (texto), self-hosted vía Google Fonts
- Schema.org JSON-LD completo: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList
- `llms.txt` para indexación por LLMs (GPTBot, PerplexityBot, Claude-Web, etc.)
- `sitemap.xml` y `robots.txt` optimizados
- Accesibilidad: skip-link, ARIA, contraste AA, prefers-reduced-motion
- Performance: critical rendering path inline, preload de imagen hero y fuente crítica

## Estructura

```
.
├── index.html         # Landing principal
├── 404.html           # Página de error
├── styles.css         # Hoja de estilos única
├── sitemap.xml        # Mapa del sitio
├── robots.txt         # Reglas de rastreo
├── llms.txt           # Información estructurada para LLMs
└── assets/
    ├── carpe.webp     # Imagen modelo Carpe (WebP)
    ├── carpe.jpg      # Fallback JPEG
    ├── articulo.webp  # Imagen modelo Artículo
    ├── articulo.jpg
    ├── logo-color.png # Logo en color
    └── logo-blanco.png
```

## Despliegue

- Repositorio: `DaniBrainClaw/fusionhouse-web` (GitHub)
- Hosting: GitHub Pages
- URL producción (próximamente): `https://fusionhouse.es`
- URL demo actual: `https://danibrainclaw.github.io/fusionhouse-web/`

## Pendiente de activar en producción

1. Configurar dominio personalizado `fusionhouse.es` en GitHub Pages o migrar a SiteGround (donde ya están el resto de webs del grupo).
2. Sustituir endpoint del formulario (`https://formspree.io/f/REEMPLAZAR`) por uno real (Formspree, Basin, o endpoint propio).
3. Crear páginas legales: aviso legal, política de privacidad, política de cookies.
4. Crear Google Business Profile para Valladolid.
5. Registrar el sitio en Google Search Console y Bing Webmaster Tools.
6. Activar Open Graph image personalizada para compartir en redes.

## Contacto

- Email: fusionhouse.es@gmail.com
- Tel: +34 654 15 11 50
- Zona: Valladolid · Castilla y León