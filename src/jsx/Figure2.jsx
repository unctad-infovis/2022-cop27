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
        color: (keys[i] === 'Water management') ? '#009edb' : '#eb1f48',
        y: parseFloat(val),
      })).filter(val => !Number.isNaN(val.y)),
      labels: keys.filter(val => val !== 'Name'),
      name: el.Name
    });
  });

  useEffect(() => {
    const data_file = `${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-cop27/' : './'}assets/data/2022-cop27_figure_2.csv`;
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
        idx="2"
        data={dataFigure}
        data_decimals={0}
        export_title_margin={30}
        margin={30}
        labels_inside
        note=""
        source="UNCTAD secretariat calculations based on information from the Financial Times Ltd, fDi Markets for accounced greenfield FDI projects and Refinitiv SA for international projects finance deals."
        subtitle="Number of greenfield project announcements and international finance deals"
        suffix="%"
        title="Climate change investment trend, 2022 vs 2021"
        ymax={6}
        ymin={-14}
        ylabel="Percentage"
      />
      )}
    </div>
  );
}

export default Figure1;
