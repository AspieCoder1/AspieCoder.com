/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { getSlugs } from '@utils/contentfulClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log(req.headers.authorization);
	if (req.headers.authorization !== process.env.REVALIDATE_SECRET) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate('/blog');
		const slugs = await getSlugs();
		await Promise.all(slugs.map((slug) => res.revalidate(`/posts/${slug}`)));
		return res.json({ revalidated: true });
	} catch (err: any) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send({ msg: err.message });
	}
};

export default handler;
