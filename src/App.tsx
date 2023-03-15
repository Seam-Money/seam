import React from "react";
import Web3Provider from "@fewcha/web3-react";
import Wrapper from "./Wrapper";
import { RouterProvider } from "react-router-dom";
import { BaseRouter } from "BaseRouter";
import { AuthProvider } from "context/AuthContext";

function App() {
  return (
    <div className="bg-darkgray min-h-screen relative z-10">
      <AuthProvider>
        <Web3Provider>
          <Wrapper>
            <RouterProvider router={BaseRouter()} />
          </Wrapper>
        </Web3Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
