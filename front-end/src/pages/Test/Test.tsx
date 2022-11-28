import { Button } from "antd";
import React from "react";
import { ButtonCommon } from "src/common";

type Props = {};

const Test = (props: Props) => {
	return (
		<div>
			<Button>daiiiiiiii</Button>
			<ButtonCommon size="small" type="danger" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="info" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="outstanding" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="primary" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="secondary" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="success" ghost>
				daiiiiiiii
			</ButtonCommon>
			<ButtonCommon size="small" type="warning" ghost>
				daiiiiiiii
			</ButtonCommon>
		</div>
	);
};

export default Test;
