import React from 'react';
import { DAppProvider } from "../../dapp/dapp";
import { APP_NAME } from '../../dapp/defaults';

import Header from '../../components/header/Header';
import AppRoutes from './AppRoutes';
import Footer from '../footer/Footer'; 

const App: React.FC = () => {
    return (
      <DAppProvider appName={APP_NAME}>
          <React.Suspense fallback={null}>
            <Header />
            <AppRoutes />
            <Footer />
          </React.Suspense>
      </DAppProvider>
  );
}

export default App;
