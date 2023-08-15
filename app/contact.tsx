/*
 * Copyright (c) 2023. AspieCoder
 */

'use client';

import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
	const [state, handleSubmit] = useForm('xeqbeyov');
	return (
		<section className=" md:prose-xl prose mx-auto max-w-screen-xl md:pb-32 pb-16 xl:px-0 px-4">
			<h2
				className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4"
				id="contact"
			>
				Contact
			</h2>
			<p>
				Please complete in this form to inquire about web development services.
				I aim to reply to any messages as soon as possible.
			</p>
			<form
				className="grid grid-cols-1 gap-6"
				onSubmit={() => handleSubmit}
				id="contact"
			>
				<label>
					<span>Email</span>
					<input
						id="email"
						type="email"
						className="form-input px-4 py-3 w-full"
						name="email"
						placeholder="john@example.com"
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
				</label>

				<div className="grid md:grid-cols-2 grid-cols-1 gap-6">
					<label>
						<span>First name</span>
						<input
							type="text"
							className="form-input px-4 py-3 w-full"
							name="firstname"
							id="firstname"
							placeholder="First name"
						/>
						<ValidationError
							prefix="First name"
							field="firstname"
							errors={state.errors}
						/>
					</label>
					<label>
						<span>Surname</span>
						<input
							type="text"
							className="form-input px-4 py-3 w-full"
							name="surname"
							id="surname"
							placeholder="Surname"
						/>
						<ValidationError
							prefix="Surname"
							field="surname"
							errors={state.errors}
						/>
					</label>
				</div>

				<label>
					<span>Subject</span>
					<input
						type="text"
						className="form-input px-4 py-3 w-full"
						name="subject"
						id="subject"
						placeholder="Subject"
					/>
					<ValidationError
						prefix="Subject"
						field="subject"
						errors={state.errors}
					/>
				</label>

				<label>
					<span>Message</span>
					<textarea
						id="message"
						className="form-input px-4 py-3 w-full"
						name="message"
						placeholder="Please enter your message..."
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</label>
				<div>
					<button
						className="w-full bg-purple-200 text-purple-900 py-2 disabled:bg-purple-100"
						type="submit"
						disabled={state.submitting}
					>
						Submit
					</button>
					{state.succeeded && (
						<p className="pt-1 text-gray-500">Message sent</p>
					)}
				</div>
			</form>
		</section>
	);
};

export default Contact;
