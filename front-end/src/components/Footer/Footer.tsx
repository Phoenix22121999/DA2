import { Input } from "antd";
import React from "react";
import "./Footer.scss";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";
type Props = {};

const Footer = (props: Props) => {
	var d = new Date();
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-warpper">
					<div className="contact footer-sub">
						<div className="footer-sub-title">Contact</div>
						<div className="footer-sub-item">
							Nguyễn Hữu Tấn Đạt <br /> Ngô Minh Hiếu
						</div>
						<div className="footer-sub-item">
							Phone : <br /> +84 0776715590 <br /> +84 0961202760
						</div>
						<div className="footer-sub-item">
							Email :<br /> 51702075@student.tdtu.edu.com <br />
							51702017@student.tdtu.edu.com
						</div>
					</div>
					<div className="about footer-sub">
						<div className="footer-sub-title">About Us</div>
						<div className="footer-sub-item">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Distinctio, iusto minus laboriosam at
							voluptate quidem! Veritatis nihil facilis odio
							rerum!
						</div>
					</div>
					<div className="newsletter footer-sub">
						<div className="footer-sub-title">Newsletter</div>
						<div className="newsletter-input">
							<Input placeholder="Newsletter" />
						</div>
						<div className="newsletter-button">
							<ButtonCommon>Send</ButtonCommon>
						</div>
					</div>
				</div>
				<div className="copy-right">
					Copyright &#169;{d.getFullYear()} Nguyen Huu Tan Dat And Ngo
					Minh Hieu, All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
