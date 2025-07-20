// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "motion/react";

// const Contact = () => {
// 	return (
// 		<motion.div
// 			initial={{ opacity: 0 }}
// 			whileInView={{ opacity: 1 }}
// 			transition={{ duration: 1 }}
// 			id="contact"
// 			className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[url("/footer-bg-color.png")] bg-center bg-[length: 90%_auto]'
// 		>
// 			<motion.h4
// 				initial={{ y: -20, opacity: 0 }}
// 				whileInView={{ y: 0, opacity: 1 }}
// 				transition={{ delay: 0.3, duration: 0.5 }}
// 				className="text-center mb-2 text-lg font-Ovo"
// 			>
// 				Connect with me
// 			</motion.h4>
// 			<motion.h2
// 				initial={{ y: -20, opacity: 0 }}
// 				whileInView={{ y: 0, opacity: 1 }}
// 				transition={{ delay: 0.5, duration: 0.5 }}
// 				className="text-center text-5xl font-Ovo"
// 			>
// 				Get in touch
// 			</motion.h2>

// 			<motion.p
// 				initial={{ opacity: 0 }}
// 				whileInView={{ opacity: 1 }}
// 				transition={{ delay: 0.7, duration: 0.5 }}
// 				className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
// 			>
// 				I'd love to hear from you! If you have any questions, comments or
// 				feedback, use the form below.
// 			</motion.p>

// 			<motion.form
// 				initial={{ opacity: 0 }}
// 				whileInView={{ opacity: 1 }}
// 				transition={{ delay: 0.9, duration: 0.5 }}
// 				action="https://formspree.io/f/movljldd"
// 				method="POST"
// 				// onSubmit={onSubmit}
// 				className="max-w-2xl mx-auto"
// 			>
// 				<div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
// 					<motion.input
// 						initial={{ x: -50, opacity: 0 }}
// 						whileInView={{ x: 0, opacity: 1 }}
// 						transition={{ delay: 1.1, duration: 0.6 }}
// 						type="text"
// 						placeholder="Enter your name"
// 						required
// 						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
// 						name="name"
// 					/>
// 					<motion.input
// 						type="email"
// 						placeholder="Enter your email"
// 						required
// 						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
// 						name="email"
// 					/>
// 				</div>
// 				<motion.textarea
// 					initial={{ y: 100, opacity: 0 }}
// 					whileInView={{ y: 0, opacity: 1 }}
// 					transition={{ delay: 1.3, duration: 0.6 }}
// 					rows="6"
// 					placeholder="Enter your message"
// 					required
// 					className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 "
// 					name="message"
// 				></motion.textarea>
// 				<motion.button
// 					whileHover={{ scale: 1.05 }}
// 					transition={{ duration: 0.3 }}
// 					type="submit"
// 					className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
// 				>
// 					Submit now{" "}
// 					<Image
// 						src={assets.right_arrow_white}
// 						alt=""
// 						className="w-4"
// 					/>
// 				</motion.button>

// 				{/* <p className="mt-4">{result}</p> */}
// 			</motion.form>
// 		</motion.div>
// 	);
// };

// export default Contact;

"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";

const Contact = () => {
	const [state, handleSubmit] = useForm("movljldd");
	const [showSuccess, setShowSuccess] = useState(false);
	const formRef = useRef();

	useEffect(() => {
		if (state.succeeded && formRef.current) {
			formRef.current.reset();
			setShowSuccess(true);
			const timer = setTimeout(() => setShowSuccess(false), 4000);
			return () => clearTimeout(timer);
		}
	}, [state.succeeded]);

	// if (state.succeeded) {
	// 	return (
	// 		<motion.div
	// 			initial={{ opacity: 0 }}
	// 			whileInView={{ opacity: 1 }}
	// 			transition={{ duration: 1 }}
	// 			className="w-full px-[12%] py-20 text-center"
	// 		>
	// 			<h2 className="text-4xl font-Ovo mb-4">Thanks for your message!</h2>
	// 			<p className="text-lg font-Ovo">I'll get back to you soon.</p>
	// 		</motion.div>
	// 	);
	// }
	// Remove this whole if-block so the form always shows

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id="contact"
			className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[url("/footer-bg-color.png")] bg-center bg-[length: 90%_auto]'
		>
			<motion.h4
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="text-center mb-2 text-lg font-Ovo"
			>
				Connect with me
			</motion.h4>
			<motion.h2
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className="text-center text-5xl font-Ovo"
			>
				Get in touch
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.7, duration: 0.5 }}
				className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
			>
				I'd love to hear from you! If you have any questions, comments or
				feedback, use the form below.
			</motion.p>

			<motion.form
				ref={formRef}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.9, duration: 0.5 }}
				onSubmit={handleSubmit}
				className="max-w-2xl mx-auto"
			>
				<div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
					<motion.input
						initial={{ x: -50, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 1.1, duration: 0.6 }}
						type="text"
						placeholder="Enter your name"
						required
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
						name="name"
					/>
					<motion.input
						type="email"
						placeholder="Enter your email"
						required
						className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
						name="email"
					/>
				</div>

				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>

				<motion.textarea
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 1.3, duration: 0.6 }}
					rows="6"
					placeholder="Enter your message"
					required
					className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 "
					name="message"
				></motion.textarea>

				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
				<motion.button
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
					type="submit"
					disabled={state.submitting}
					className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
				>
					{state.submitting ? (
						<span className="animate-pulse">Sending...</span>
					) : (
						<>
							Submit now{" "}
							<Image
								src={assets.right_arrow_white}
								alt=""
								className="w-4"
							/>
						</>
					)}
				</motion.button>

				{showSuccess && (
					<p className="text-black text-center mt-4 font-Ovo">
						Message sent successfully!
					</p>
				)}
			</motion.form>
		</motion.div>
	);
};

export default Contact;
