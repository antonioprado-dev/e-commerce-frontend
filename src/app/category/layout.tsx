import React from 'react';

type Props = {
	children: React.ReactNode;
};

export const dynamicParams = false;

export default function CategoryLayout({ children }: Props) {
	return <main>{children}</main>;
}
