import React, { useState, useEffect } from 'react';

// Load helpers.
import { transpose } from 'csv-transpose';
import CSVtoJSON from './helpers/CSVtoJSON.js';
import ChartBar from './charts/ChartBar.jsx';

import '../styles/styles.less';

function Figure1() {
  // Data states.
  const [dataFigure, setDataFigure] = useState(false);

  const cleanData = (data) => data.map(el => {
    const values = Object.values(el);
    const keys = Object.keys(el);

    return ({
      data: values.map((val, i) => ({
        color: (keys[i] === 'Mitigation' || keys[i] === 'Adaptation') ? '#004987' : undefined,
        y: Math.abs(parseFloat(val)),
      })).filter(val => !Number.isNaN(val.y)),
      labels: keys.filter(val => val !== 'Name'),
      name: el.Name
    });
  });

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-cop27/' : './'}assets/data/2022-cop27_figure_1.csv`;
    try {
      fetch(data_file)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.text();
        })
        .then(body => setDataFigure(cleanData(CSVtoJSON(transpose(body)))));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      {dataFigure && (
      <ChartBar
        idx="1"
        data={dataFigure}
        data_decimals={0}
        export_title_margin={30}
        margin={30}
        labels_inside
        note="Numbers for 2022 are project based on the first three quarters for international project finance deals and the first 8 months for greenfield projects."
        source="UNCTAD secretariat calculations based on information from the Financial Times Ltd, fDi Markets for accounced greenfield FDI projects and Refinitiv SA for international projects finance deals."
        subtitle="Greenfield project announcements and international project finance deals January–September 2022 vs. 2021, percentage"
        suffix="%"
        title="Investment to tackle climate change falls amid crises"
        ymax={30}
        ymin={0}
        ylabel="Percentage"
      />
      )}
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Figure1;
