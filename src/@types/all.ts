export interface IProducts {
 id: number;
 name: string;
 desc: string;
 price: number;
 image: string;
}

export interface IProductsState {
 products: IProducts[];
 status: 'null' | 'pending' | 'success' | 'rejected';
}