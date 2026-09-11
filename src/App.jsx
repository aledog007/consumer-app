import { useState } from 'react';
// Eigenes React Package
import MyBargraph from '@aledog007/mybargraph';
// Package vom Lernpartner John Leonhardt (npmjs)
import HorizontalBarGraph from '@johnsoryna/mybargraph';

import './App.css';

function App() {
  const [ownVal, setOwnVal] = useState(65);
  const [johnVal, setJohnVal] = useState(45);

  return (
    <div className="container">
      <header className="header">
        <h1>M324 DevOps – React Packages</h1>
        <p>Einbindung externer React-Komponenten via <code>node_modules</code></p>
        <span className="author">Entwickler: Alessio Fano</span>
      </header>

      <div className="grid">
        {/* 1. Eigenes Package */}
        <div className="card">
          <span className="tag own">Eigenes Package</span>
          <h2>@aledog007/mybargraph</h2>
          <p className="subtext">Erstellt mit Vite Library Mode und CSS-Injection</p>

          <MyBargraph
            label="Projektfortschritt"
            value={ownVal}
            maxvalue={100}
            barwidthpx={340}
            color="#2563eb"
          />

          <MyBargraph
            label="Testabdeckung"
            value={85}
            maxvalue={100}
            barwidthpx={340}
            color="#10b981"
          />

          <div className="btn-group">
            <button onClick={() => setOwnVal(v => Math.max(0, v - 10))}>- 10%</button>
            <button onClick={() => setOwnVal(v => Math.min(100, v + 10))}>+ 10%</button>
            <button onClick={() => setOwnVal(65)}>Reset</button>
            <span className="val-text">Aktuell: {ownVal}%</span>
          </div>
        </div>

        {/* 2. Lernpartner Package */}
        <div className="card">
          <span className="tag partner">Lernpartner Package (John Leonhardt)</span>
          <h2>@johnsoryna/mybargraph</h2>
          <p className="subtext">Installiert von npmjs.com</p>

          <HorizontalBarGraph
            label="Speicherauslastung"
            value={johnVal}
            maxvalue={100}
            barwidthpx={340}
            color="#8b5cf6"
          />

          <HorizontalBarGraph
            label="Netzwerkauslastung"
            value={70}
            maxvalue={100}
            barwidthpx={340}
            color="#f97316"
          />

          <div className="btn-group">
            <button onClick={() => setJohnVal(v => Math.max(0, v - 10))}>- 10%</button>
            <button onClick={() => setJohnVal(v => Math.min(100, v + 10))}>+ 10%</button>
            <button onClick={() => setJohnVal(45)}>Reset</button>
            <span className="val-text">Aktuell: {johnVal}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
