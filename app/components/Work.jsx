import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="work"
			className="w-full px-[12%] py-10 scroll-mt-20"
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-center mb-2 text-lg font-Ovo"
			>
				My portfolio
			</motion.h4>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-center text-5xl font-Ovo"
			>
				My latest work
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
			>
				Welcome to my web development portfolio! explore a collection of
				projects showcasing my expertise in front-end development.
			</motion.p>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.6 }}
				className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5"
			>
				{/* {workData.map((project, index) => (
					<motion.div
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.3 }}
						key={index}
						style={{ backgroundImage: `url(${project.bgImage})` }}
						className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
					>
						<div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500 ">
							<div>
								<h2 className="font-semibold">{project.title}</h2>
								<p className="text-sm text-gray-700">{project.description}</p>
							</div>
							<div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
								<Image
									src={assets.send_icon}
									alt="send icon"
									className="w-5"
								/>
							</div>
						</div>
					</motion.div>
				))} */}
				{workData.map(({ title, description, bgImage, link }, index) => {
					return (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.3 }}
							style={{ backgroundImage: `url(${bgImage})` }}
							className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
						>
							<div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500">
								<div>
									<h2 className="font-semibold">{title}</h2>
									<p className="text-sm text-gray-700">{description}</p>
								</div>

								{/* Only render the clickable icon if the link exists */}
								{link ? (
									<a
										href={link}
										target="_blank"
										rel="noopener noreferrer"
										className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
									>
										<Image
											src={assets.send_icon}
											alt="send icon"
											className="w-5"
										/>
									</a>
								) : (
									<div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] opacity-50 cursor-not-allowed">
										<Image
											src={assets.send_icon}
											alt="send icon"
											className="w-5"
										/>
									</div>
								)}
							</div>
						</motion.div>
					);
				})}
			</motion.div>

			{/* <motion.a
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.1, duration: 0.5 }}
				href=""
				className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 "
			>
				Show more{" "}
				<Image
					src={assets.right_arrow_bold}
					alt="Right arror"
					className="w-4"
				/>
			</motion.a> */}
		</motion.div>
	);
};

export default Work;
