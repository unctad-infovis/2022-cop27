import React, { /* useState, useEffect */ } from 'react';
import '../styles/styles.less';

import Quote from './components/Quote.jsx';

// Load helpers.

function App() {
  return (
    <div className="app">
      <Quote author_name="Rebeca Grynspan" author_title="Secretary-General of UNCTAD" first_line="" second_line="The least developed countries are the litmus test against which history will judge how fairly we addressed the common but differentiated responsibilities principle enshrined in the fight against climate change." />
    </div>
  );
}

export default App;
