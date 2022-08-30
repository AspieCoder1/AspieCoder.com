/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import Ajv, { JSONSchemaType } from 'ajv';
import logger from '@utils/logger';

type Body = {
	slug: string;
};

const ajv = new Ajv();

const schema: JSONSchemaType<Body> = {
	type: 'object',
	properties: {
		slug: { type: 'string' },
	},
	required: ['slug'],
	additionalProperties: false,
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { body } = req;
	if (req.headers.authorization !== process.env.REVALIDATE_SECRET) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	const isValid = ajv.compile(schema);

	if (!isValid(body)) {
		logger.error('Failed to provide a slug');
		return res.status(400).json({ message: 'Failed to provide a slug' });
	}

	try {
		const { slug } = body;
		await res.revalidate('/blog');
		await res.revalidate(`/posts/${slug}`);
		logger.info(`updated /posts/${slug}`);
		return res.json({ revalidated: true });
	} catch (err: any) {
		logger.error(err.message);
		return res.status(500).send({ msg: err.message });
	}
};

export default handler;
