import "./Statistic.scss";
import useEffectOnce from "./../../hooks/useEffectOne";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getStatistic,
	selectUserStatistic,
} from "src/redux/slice/UserResumeSilce";

type Props = {};

const Statistic = (props: Props) => {
	const dispatch = useReduxDispatch();
	const s = useReduxSelector(selectUserStatistic);
	useEffectOnce(() => {
		dispatch(getStatistic({ payload: null }));
	});

	return (
		<div className="statistic-warpper">
			<div className="statistic-item">
				<div className="statistic-item-tile">Candidate Account</div>
				<div className="statistic-item-number">{s.total_type_can}</div>
			</div>
			<div className="statistic-item">
				<div className="statistic-item-tile">Recruiter Account</div>
				<div className="statistic-item-number">
					{s.total_type_recruiter}
				</div>
			</div>
			<div className="statistic-item">
				<div className="statistic-item-tile">Number Of Posts</div>
				<div className="statistic-item-number">{s.totalPost}</div>
			</div>
			<div className="statistic-item">
				<div className="statistic-item-tile">Number Of Cvs</div>
				<div className="statistic-item-number">{s.totalResume}</div>
			</div>
		</div>
	);
};

export default Statistic;
