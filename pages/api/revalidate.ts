/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { getSlugs } from '@utils/contentfulClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	try {
		// this should be the actual path not a rewritten path
		// e.g. for "/blog/[slug]" this should be "/blog/post-1"
		await res.revalidate('/blog');
		const slugs = await getSlugs();
		await Promise.all(slugs.map((slug) => res.revalidate(`/posts/${slug}`)));
		return res.json({ revalidated: true });
	} catch (err) {
		// If there was an error, Next.js will continue
		// to show the last successfully generated page
		return res.status(500).send('Error revalidating');
	}
};

export default handler;