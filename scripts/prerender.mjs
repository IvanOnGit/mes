import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

// Copy usada para cada ruta: sale de los textos ya existentes en cada página
// (FloatingTitle/FloatingDescription), sin inventar contenido nuevo.
const pages = [
  {
    path: '/',
    title: 'MES | María Eugenia Silva',
    description:
      'Vida Plena + Impacto en todos los ámbitos. Consultoría en Biotrascendencia, Sistémica, Astrológica y Talent Activation System para líderes que trascienden.',
  },
  {
    path: '/biotrascendencia',
    title: 'Consultoría en Biotrascendencia® | MES',
    description:
      'Un enfoque para facilitar la evolución consciente y alcanzar una vida plena, trascendiendo las limitaciones de lo conocido.',
  },
  {
    path: '/consultoria-sistemica',
    title: 'Consultoría Sistémica | MES',
    description:
      'El poder de ocupar tu lugar para avanzar en la vida. Constelaciones familiares y organizacionales para resignificar y avanzar.',
  },
  {
    path: '/consultoria-astrologica',
    title: 'Consultoría Astrológica | MES',
    description: 'Que lo desconocido no controle tu vida. Descubrí, elegí y diseñá tu camino.',
  },
  {
    path: '/talent-activation-system',
    title: 'Talent Activation System® | MES',
    description:
      'Activá todos tus talentos y viví tu meta. Un programa creativo y sistémico para la transformación rápida.',
  },
  {
    path: '/professional-training',
    title: 'Professional Training | MES',
    description: 'Entrenamientos que impactan y dejan huellas.',
  },
  {
    path: '/sobre-mi',
    title: 'Sobre Mí | María Eugenia Silva',
    description: 'Conocé la trayectoria y formación de María Eugenia Silva.',
  },
];

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')));

  for (const page of pages) {
    const { html, styleTags } = render(page.path);

    const pageHtml = template
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace(
        '<title>MES</title>',
        `<title>${page.title}</title>\n    <meta name="description" content="${page.description}" />`
      )
      .replace('</head>', `${styleTags}\n  </head>`);

    const outDir = page.path === '/' ? distDir : path.join(distDir, page.path);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml);
    console.log(`Prerendered ${page.path} -> ${path.relative(root, path.join(outDir, 'index.html'))}`);
  }

  fs.rmSync(ssrDir, { recursive: true, force: true });
}

main();
