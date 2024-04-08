import ItemList from '@/components/ItemList/ItemList';
import { products } from '@/components/ItemList/productList';
import Error from 'next/error';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
	params: { cat: string };
};

// const returnCategory = (arr: string) => arr.split('/')[2];

export async function generateStaticParams() {
	const categories = ['food', 'health'];

	return categories.map((category) => ({
		cat: category,
	}));
}

export default function Category({ params }: Props) {
	const { cat } = params;

	return (
		<main>
			<ItemList
				products={products}
				category={cat}
			/>
		</main>
	);
}
