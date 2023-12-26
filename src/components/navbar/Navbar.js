import React from "react";
import Link from "next/link";

const links = [
	{
		id: 1,
		name: "about",
		url: "/about",
	},
	{
		id: 2,
		name: "blog",
		url: "/blog",
	},
	{
		id: 3,
		name: "contact",
		url: "/contact",
	},
	{
		id: 4,
		name: "dashboard",
		url: "/dashboard",
	},
	{
		id: 5,
		name: "login",
		url: "/dashboard/login",
	},
	{
		id: 6,
		name: "register",
		url: "/dashboard/register",
	},
];

const Navbar = () => {
	return (
		<div>
			<Link href="/">Billamia</Link>
			<div>
				{links.map((link) => {
					return (
						<Link key={link.id} href={link.url}>
							{link.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Navbar;
