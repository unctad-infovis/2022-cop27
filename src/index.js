import React from 'react';

import { createRoot } from 'react-dom/client';

import Figure1 from './jsx/Figure1.jsx';
import Figure2 from './jsx/Figure2.jsx';
import Quote1 from './jsx/Quote1.jsx';
import Quote2 from './jsx/Quote2.jsx';

const figure1 = document.getElementById('app-root-2022-cop27_figure_1');
if (figure1) {
  const rootFigure1 = createRoot(figure1);
  rootFigure1.render(<Figure1 />);
}
const figure2 = document.getElementById('app-root-2022-cop27_figure_2');
if (figure2) {
  const rootFigure2 = createRoot(figure2);
  rootFigure2.render(<Figure2 />);
}

const quote1 = document.getElementById('app-root-2022-cop27_quote_1');
if (quote1) {
  const rootQuote1 = createRoot(quote1);
  rootQuote1.render(<Quote1 />);
}

const quote2 = document.getElementById('app-root-2022-cop27_quote_2');
if (quote2) {
  const rootQuote2 = createRoot(quote2);
  rootQuote2.render(<Quote2 />);
}
