
import "react-bubble-ui/dist/index.css";
import DappBubble from "../components/dapps/DappBubble";
// import "./myComponent.css";

import { Dapp } from "components/dapps/types";

interface Props {
	dapps: any[];
	onSelect: (dapp:Dapp)=>void;
}
const BubbleSection = ({ dapps, onSelect }: Props) => {
	const children = dapps.map((dapp: Dapp, i: number) => {
		return (
			<DappBubble dapp={dapp}  onSelect={onSelect}  />
		);
	});

	return (<div className="flex flex-col">
		<div className="scrollY scrollbar scrollbar-track-blue scrollbar-thumb-pink p-2 m-1">
			<div className="flex flex-col p-3  gap-2 ">
				{children}
			</div>
		</div>
	</div>)
};

export default BubbleSection;