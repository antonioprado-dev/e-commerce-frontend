import React from 'react';

type Props = {
	children: React.ReactNode;
};

export default function CategoryLayout({ children }: Props) {
	return <main>{children}</main>;
}
