import React, { useRef, useState } from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { HeaderItem } from "./components/HeaderItem/HeaderItem";
import "./Header.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useModal } from "src/hooks/useModal";
type HeaderProps = {};
const HEADER_ITEM = [
	{
		key: "home",
		link: "/",
		title: "Home",
	},
	{
		key: "about",
		link: "/",
		title: "About",
	},
];
export const AppHeader = (props: HeaderProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const { close, open, isOpen } = useModal(false);

	return (
		<div className="app-header" ref={ref}>
			<div className="app-logo">TDT Job Finder</div>
			<ul
				className={classNames("app-menu", {
					"is-menu-open": isMenuOpen,
				})}
			>
				{HEADER_ITEM.map((item) => {
					return <HeaderItem {...item} />;
				})}
				{/* <div className="button-group"> */}
				<ButtonCommon className="signup" size="small">
					sign up
				</ButtonCommon>
				<ButtonCommon className="login" onClick={open} size="small">
					login
				</ButtonCommon>
				{/* </div> */}
			</ul>
			<div
				className={classNames("icon-toggle", { "is-open": isMenuOpen })}
				onClick={toggleMenu}
			>
				<div className="open">
					<MenuOutlined />
				</div>
				<div className="close">
					<CloseOutlined />
				</div>
			</div>
			<Modal open={isOpen} onCancel={close} centered>
				<Form
					name="basic"
					// labelCol={{ span: 8 }}
					// wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={close}
					autoComplete="off"
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your username!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};
