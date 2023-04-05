import React from "react";
import { TabCommon } from "src/common";
import { TabItemType } from "src/common/TabCommon/TabCommon";
import "./HowItWord.scss";
import HowItWordCamdidate from "./HowItWordCandidate/HowItWordCandidate";
import HowItWordRecuiter from "./HowItWordRecruiter/HowItWordRecuiter";
type Props = {};
const items: TabItemType[] = [
	{ label: "Candidate", key: "item-1", children: <HowItWordCamdidate /> }, // remember to pass the key prop
	{ label: "Recuiter", key: "item-2", children: <HowItWordRecuiter /> },
];
const HowItWord = (props: Props) => {
	return (
		<div className="how-it-word">
			<div className="container">
				<div className="how-it-word-title">How It Work</div>
				<TabCommon item={items} />
			</div>
		</div>
	);
};

export default HowItWord;
