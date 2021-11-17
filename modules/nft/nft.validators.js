const Joi = require('joi');
const { NftModel } = require('../models');

const GooseJoi = require('../../helpers/utils/goosejoi');

const Nft = GooseJoi.convert(NftModel);

module.exports = {
	add: {
		payload: Joi.object({
			name: Nft.name.example('Test Nft'),
			symbol: Nft.symbol.example('TST'),
			totalSupply: Nft.totalSupply.example(100),
			tokenId: Nft.tokenId.example(1),
			packageImg: Joi.string(),
			metadata: Nft.metadata,
			project: Nft.project.example('5ff99cebc00c1432b1ecd904')
		}).label('nft')
	},
	listByProject: {
		params: GooseJoi.id(),
		query: Joi.object({
			start: Joi.number(),
			limit: Joi.number(),
			name: Joi.string()
		})
	},
	getById: {
		params: GooseJoi.id()
	},

	remove: {
		params: GooseJoi.id()
	},
	mintTokens: {
		params: GooseJoi.id(),
		payload: Joi.object({
			mintQty: Joi.number()
		})
	},
	update: {
		params: GooseJoi.id(),
		payload: Joi.object({
			name: Nft.name.example('Test Nft'),
			symbol: Nft.symbol.example('TST'),
			tokenId: Nft.tokenId.example('1'),
			packageImg: Joi.string(),
			metadata: Nft.metadata,
			project: Nft.project
		}).label('nft')
	}
};