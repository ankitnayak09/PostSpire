import { bottombarLinks } from "@/constants";
import { INavLink } from "@/types";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Bottombar() {
	const { pathname } = useLocation();
	return (
		<section className="bottom-bar">
			{bottombarLinks.map((link) => (
				<Link
					to={link.route}
					className={`flex-center flex-col gap-1 p-2 transition ${
						pathname === link.route
							? "bg-primary-500 rounded-[10px]"
							: ""
					}`}
					key={link.label}
				>
					<img
						src={link.imgURL}
						alt={link.label}
						width={16}
						height={16}
						className={`${
							pathname === link.route ? "invert-white" : ""
						}`}
					/>
					<p className="tiny-medium text-light-2">{link.label}</p>
				</Link>
			))}
		</section>
	);
}
