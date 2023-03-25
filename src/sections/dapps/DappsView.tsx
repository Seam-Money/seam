import DappBubble from "components/dapps/DappBubble";
import { dapps } from "data/dapps/dapp_data";
import { useEffect, useState } from "react";
import BubbleSection from "sections/BubbleSection";
import { Types } from "aptos";
import { loadTxs } from "hooks/useTransaction";
import TxnList from "sections/TxnList";
import DappFrame from "./DappFrame";
import { gql } from "@apollo/client";
import Icons from "components/Icons";
import DappLogo from "./DappLogo";
import DappBadge from "components/DappBadge";
import ReactTooltip from "react-tooltip";
import Draggable from 'react-draggable';
import { dappByName, dappsByAddress, shuffle } from "util/dappUtils";
import { DappContextProvider, useDappContext } from "./DappContext";
import { Outlet, useParams } from "react-router-dom";
import WindowWrapper from "components/etc/WindowWrapper";
import SplashFrame from "./SplashFrame";
import SwitchView from "sections/SwitchView";
import DappTwitter from "./DappTwitter";
import ReactSelect from "react-select";



const DappsView = () => {
    let { dappName } = useParams();

    const [selectedDapp, setSelectedDapp] = useState<any>(dappByName(dappName || "home"));
    const [recentOpen, setRecentOpen] = useState<any[]>(dapps.slice(0, 3));
    const [home,setHome] = useState<boolean>(true);
    const [txns,setTxs] = useState<any[]>([]);
    const [otherTxns,setOther] = useState<any[]>([]);

    const [dappStack, setDappStack] = useState<any[]>([dappByName("Topaz"), ...recentOpen]);
    // const { isHome, selectDapp, toggleHome } = useDappContext()

    const pushDapp = (curr: any) => {
        const newStack = [curr, ...dappStack]
        setDappStack(newStack);
    }


    const changeDapp = (dapp: any) => {
        setHome(false);
        setSelectedDapp(dapp);
        pushDapp(dapp);
        loadTxs(dapp.address, dapp.client).then((res) => {
            setTxs(res);
        }
        );
    }

    

    return (
        <div>
<ReactSelect
            className="w-full text-black"
          options={dapps.map((dapp) => ({ value: dapp.name, label: dapp.name }))}
          onChange={(name:any)=>changeDapp(dappByName(name.value))}
          placeholder="Search for a Dapp..."
        />
        
        <div className="flex flex-col w-full p-2 relative items-start justify-start ">
            <div className="flex flex-col">
            <h3>Recents</h3>
            <div className="flex flex-row justify-start p-1"></div>
          {dappStack.map((dapp, index) => (
            <button  className=""key={index} onClick={() => changeDapp(dapp)}>
                
                {DappLogo(dapp.image)}
                
              {dapp.name}
            </button>
          ))}
            </div>
                <div className="px-6 w-full">
                    <div className="w-full items-center justify-center">
                    {home ? (
                            <SplashFrame selectDapp={changeDapp} />)
                            : null}
                        {  selectedDapp?.name ? (
                            <DappFrame dapp={selectedDapp} goHome={()=>setHome(true)} viewUrl={selectedDapp.url} selectDapp={changeDapp} />) : null}
                        
                    </div>
                </div>
                <SwitchView
                    tab_names={["Txns", "Twitter","Stats"]}
                >
                {txns?.length !== 0 ? <TxnList txns={txns || []} address={selectedDapp.address} /> : null}
                {selectedDapp?.twitter ? <DappTwitter username={selectedDapp?.twitter} />  : null}

                {txns?.length !== 0 ? <TxnList txns={txns || []} address={selectedDapp.address} /> : null}
                </SwitchView>
                <ReactTooltip place="top" textColor="white" html={true} multiline={true} />
        </div>
        </div>
    );
}

export default DappsView;