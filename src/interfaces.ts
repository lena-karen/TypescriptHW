export interface SearchFormData {
	coordinates: string
	checkIn: number
	checkOut: number
	maxPrice: number
}
  
export interface Place {
	id: number;
	image: string;
	name: string;
	description: string;
	remoteness: number;
	bookedDates: number[];
	price: number;
} 

export interface Favorite {
	id: number;
	name: string;
	image: string;
}