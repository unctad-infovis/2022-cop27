import React, { /* useState, useEffect */ } from 'react';
import '../styles/styles.less';

import Quote from './components/Quote.jsx';

// Load helpers.

function App() {
  return (
    <div className="app">
      <Quote author_name="António Guterres" author_title="Secretary-General of the United Nations" first_line="" second_line="Adaptation needs in the developing world are set to skyrocket to as much as $340 billion a year by 2030. Yet adaptation support today stands at less than one-tenth of that amount.  The most vulnerable people and communities are paying the price." />
    </div>
  );
}

export default App;
