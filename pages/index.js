import React from 'react';
import { ShieldCheck, Rocket, Zap, Heart } from 'lucide-react';

export default function PapiCentral() {
  return (
    <div style={{backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif'}}>
      <header style={{borderBottom: '1px solid #1e293b', paddingBottom: '20px', marginBottom: '40px', textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', color: '#38bdf8', marginBottom: '10px'}}>PAPI CENTRAL</h1>
        <p style={{color: '#94a3b8', fontSize: '1.2rem'}}>"Self-control is the ultimate power."</p>
      </header>

      <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        <div style={{background: '#0f172a', padding: '30px', borderRadius: '15px', border: '2px solid #38bdf8', boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
            <ShieldCheck size={32} color="#22c55e" />
            <h2 style={{margin: 0}}>PAPI-Guard</h2>
          </div>
          <p style={{color: '#94a3b8'}}>Security: <strong>ACTIVE</strong></p>
          <p style={{color: '#94a3b8'}}>Encryption: <strong>AES-256</strong></p>
        </div>

        <div style={{background: '#0f172a', padding: '30px', borderRadius: '15px', border: '1px solid #1e293b'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px'}}>
            <Rocket size={32} color="#f59e0b" />
            <h2 style={{margin: 0}}>Shipping</h2>
          </div>
          <button style={{width: '100%', padding: '15px', borderRadius: '8px', background: '#38bdf8', color: '#020617', border: 'none', fontWeight: 'bold', cursor: 'pointer'}}>
            DEPLOY NEW APP
          </button>
        </div>
      </div>

      <footer style={{marginTop: '50px', textAlign: 'center', color: '#475569'}}>
        <Zap size={16} style={{display: 'inline', marginRight: '5px'}} />
        Running on "Cold Processor" Mode
      </footer>
    </div>
  );
}
