import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="mt-20">
			<div className="text-center">
				<Image
					src={assets.logo}
					alt=""
					className="w-32 mx-auto mb-2"
				/>

				<div className="w-max flex items-center gap-2 mx-auto">
					<Image
						src={assets.mail_icon}
						alt=""
						className="w-6"
					/>
					josephebirika@gmail.com
				</div>
			</div>

			<div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt -12 py-6">
				<p> © {year} Klechukwu Dyke-Ebirika. All rights reserved</p>
				<ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
					<li>
						<a
							target="_blank"
							href="https://github.com/Lexzyart"
						>
							Github
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://github.com/Lexzyart"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

const year = new Date().getFullYear();
