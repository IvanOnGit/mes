import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { AppRoutes } from './App';

export function render(url: string) {
  const sheet = new ServerStyleSheet();
  let html = '';
  let styleTags = '';
  try {
    html = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      )
    );
    styleTags = sheet.getStyleTags();
  } finally {
    sheet.seal();
  }
  return { html, styleTags };
}
