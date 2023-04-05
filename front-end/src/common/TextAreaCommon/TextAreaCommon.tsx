import TextArea, { TextAreaProps } from "antd/lib/input/TextArea";
import "./TextAreaCommon.scss";
interface TextAreaCommonProps extends TextAreaProps {}
const TextAreaCommon = (props: TextAreaCommonProps) => {
	return (
		<div className="text-area-common">
			<TextArea {...props} />
		</div>
	);
};
export default TextAreaCommon;
