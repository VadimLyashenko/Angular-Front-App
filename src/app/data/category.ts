export class Category {
	id: number;
	title: string;
	positions: Position[];
}

class Position {
	id: number;
	title: string;
	cost: number;
	desc: string;
	weight: string;
	img: string;
	count: number;
	status: boolean;
}