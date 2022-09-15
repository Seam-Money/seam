import './index.css';
import App from './App';
import Docs from './pages/Docs';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import { Trade } from 'pages/Trade';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import NodePage from 'pages/NodePage';

import { useState } from 'react';
import { GlobalStateProvider } from 'GlobalState';
// import { MyWalletProvider } from './context/wallet/provider';
import WalletModal from 'modals/walletModal';
import Staking from './pages/Staking';


export default function Wrapper() {
  const [walletModalOpen, setWalletModal] = useState(false);
  return (
    // <ApolloProvider client={client}>
      <GlobalStateProvider>
        {/* <MyWalletProvider> */}
        {/* <div > */}
          <Navbar showConnectModal={setWalletModal} />
          <BrowserRouter>
            <Routes>
              {/* HOME PAGE */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/staking" element={<Trade/>} />
              <Route path= "/nodes" element = {<NodePage/>}/>
              <Route path="/app" element={<App />} />
              <Route path="/explorer" element={<Explorer />} />
            </Routes>
          </BrowserRouter>
          {walletModalOpen ? <WalletModal isOpen={walletModalOpen} setIsOpen={setWalletModal} /> : null}
        {/* </div> */}
        {/* </MyWalletProvider> */}
      </GlobalStateProvider>
    
    // </ApolloProvider>

  );
}
