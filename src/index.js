import React from 'react';

import { createRoot } from 'react-dom/client';

import Figure1 from './jsx/Figure1.jsx';
// import Figure2 from './jsx/Figure2.jsx';

const figure1 = document.getElementById('app-root-2022-cop27_figure_1');
const rootFigure1 = createRoot(figure1);
rootFigure1.render(<Figure1 />);

// const figure2 = document.getElementById('app-root-2022-cop27-figure2');
// const rootFigure2 = createRoot(figure2);
// root.render(<rootFigure2 />);
