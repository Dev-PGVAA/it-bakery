export interface IData {
	id: number
	title: string
	minDesc: string
	Desc: string
	url: string
	image: string
	imageDesc: string
}

export const data: IData[] = [
	{
		id: 1,
		title: 'хлеб',
		minDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus',
		Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		url: '/bread',
		image: '/bread.jpg',
		imageDesc: 'хлеб',
	},
	{
		id: 2,
		title: 'Булка',
		minDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		url: '/bulka',
		image: '/images/bulka.jpg',
		imageDesc: 'булка',
	},
	{
		id: 3,
		title: 'pirog',
		minDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		url: '/pirog',
		image: '/images/pirog.jpg',
		imageDesc: 'пирог',
	},
	{
		id: 4,
		title: 'Сметана',
		minDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		url: '/smetana',
		image: '/images/smetana.jpg',
		imageDesc: 'сметана',
	},
	{
		id: 5,
		title: 'сыр',
		minDesc:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,accusamus.',
		url: '/cheese',
		image: '/images/cheese.jpg',
		imageDesc: 'сыр',
	},
]
