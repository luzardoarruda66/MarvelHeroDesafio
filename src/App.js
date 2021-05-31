import React from 'react';
import Characters from './pages/Characters/index.tsx';
import GlobalStyle from './styles/global.ts'

const App = () => {

  return (
    <main>
        <GlobalStyle/>
    <div>
      <header className='header'>
        <img src='/images/logo.png'></img>
      </header>
      <main  className ='main'>
        <Characters/>
      </main>
      <footer className= 'footer'>Feito por Luzardo Arruda.😎</footer>
    </div>
    </main>
  );
}

export default App;
