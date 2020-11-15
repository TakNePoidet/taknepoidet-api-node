import { Request, Response } from 'express';

export interface SocialItem {
	key: string;
	link: string;
	nik: string;
	name: string;
	types: Array<'social' | 'messenger' | 'email' | 'work' | 'phone'>;
}

export type SocialList = SocialItem[];
const socialList: SocialList = [
	{
		key: 'vk',
		link: 'https://vk.com/taknepoidet',
		nik: '@taknepoidet',
		name: 'VK',
		types: ['social', 'messenger']
	},
	{
		key: 'whatsapp',
		link:
			'https://api.whatsapp.com/send?phone=+79177747838?text=%20%D0%94%D0%9E%D0%A0%D0%9E%D0%A3%20%C2%AF_(%E3%83%84)_/%C2%AF',
		nik: '8 (917) 77-47-838',
		name: 'WhatsApp',
		types: ['messenger']
	},
	{
		key: 'instagram',
		link: 'https://www.instagram.com/tak_ne_poidet/',
		nik: '@tak_ne_poidet',
		name: 'Instagram',
		types: ['social']
	},
	{
		key: 'facebook',
		link: 'https://www.facebook.com/TakNePoidet',
		nik: 'TakNePoidet',
		name: 'Facebook',
		types: ['social']
	},
	{
		key: 'google',
		link: 'mailto:yakin95@gmail.com',
		nik: 'yakin95@gmail.com',
		name: 'Email',
		types: ['email']
	},
	{
		key: 'telegram',
		link: 'https://t.me/TakNePoidet',
		nik: '@taknepoidet',
		name: 'Telegram',
		types: ['messenger']
	},
	{
		key: 'github',
		link: 'https://github.com/TakNePoidet',
		nik: 'TakNePoidet',
		name: 'GitHub',
		types: ['work']
	},
	{
		key: 'icq',
		link: 'https://icq.com/385833740',
		nik: '385 833 740',
		name: 'ICQ',
		types: ['messenger']
	}
];

export default class SocialController {
	static getAll(_: Request, res: Response): void {
		res.send({
			response: 'ok',
			items: socialList
		});
	}

	static getItem(req: Request, res: Response): void {
		const { key } = req.query;
		const social = socialList.find((item) => item.key === key);
		if (social) {
			res.send({
				response: 'ok',
				item: social
			});
		} else {
			res.status(404).send({
				errorCode: 404,
				response: 'error',
				error: {
					item: 'social not found'
				}
			});
		}
	}
}
