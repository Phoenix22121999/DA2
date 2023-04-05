import { useMemo, useState } from "react";
import { CDN_URL, ROUTE } from "src/utils/contants";
import FakeAvatar from "../../assets/images/fake-avatar.jpg";
import { Dropdown, MenuProps } from "antd";
import "./HeaderAvatar.scss";
import { useUserAuth } from "src/hooks/useUserAuth";
import { Link } from "react-router-dom";
import { ButtonCommon } from "src/common";
type HeaderAvatarProps = {
	signOut: () => void;
};

const HeaderAvatar = ({ signOut }: HeaderAvatarProps) => {
	const { isAuth, user } = useUserAuth();

	const [avatar] = useState<string>(
		user?.avartar
			? user?.avartar.includes("https")
				? user?.avartar
				: `${CDN_URL}/${user?.avartar}`
			: FakeAvatar
	);

	const itemList = useMemo(() => {
		const AVATAR_ITEM: MenuProps["items"] = [
			{
				key: "logout",
				label: (
					<div className="header-avatar-item">
						<ButtonCommon
							className="login"
							size="small"
							onClick={signOut}
						>
							Sign out
						</ButtonCommon>
					</div>
				),
			},
		];
		if (!user) {
			return [...AVATAR_ITEM];
		}
		if (user.user_type_id === 2 && isAuth) {
			return [
				// {
				// 	key: "cadidate",
				// 	link: "/cadidate/profile",
				// 	title: "Cadidate",
				// },
				{
					key: "username",
					label: (
						<div className="header-username">{user.username}</div>
					),
				},
				{
					key: "candidate",
					label: (
						<div className="header-avatar-item">
							<Link to={ROUTE.CADIDATE_PROFILE}>Cadidate</Link>
						</div>
					),
				},
				...AVATAR_ITEM,
			];
		}
		if (user.user_type_id === 3 && isAuth) {
			return [
				// {
				// 	key: "recruiter",
				// 	link: "/recruiter/profile",
				// 	title: "Recruiter",
				// },
				{
					key: "username",
					label: (
						<div className="header-username">{user.username}</div>
					),
				},
				{
					key: "candidate",
					label: <Link to={ROUTE.RECRUITER_PROFILE}>Recruiter</Link>,
				},
				...AVATAR_ITEM,
			];
		}
		if (user.user_type_id === 1 && isAuth) {
			return [
				// {
				// 	key: "admin",
				// 	link: "/admin/dashboard",
				// 	title: "Admin",
				// },
				{
					key: "candidate",
					label: (
						<div className="header-avatar-item">
							<Link to={ROUTE.ADMIN_DASHBOARD}>Admin</Link>
						</div>
					),
				},
				...AVATAR_ITEM,
			];
		}
		return AVATAR_ITEM;
	}, [user, isAuth, signOut]);

	return (
		<div className="header-avatar">
			<Dropdown menu={{ items: itemList }} placement="bottomLeft">
				<div className="header-avatar-image">
					<img src={avatar} alt="" />
				</div>
			</Dropdown>
		</div>
	);
};
export default HeaderAvatar;
