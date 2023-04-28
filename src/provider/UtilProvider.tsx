'use client';

import { addIntlUtilAsPrototypeMethod } from '@/util/intl';

interface UtilProvidorProps {
	children: React.ReactNode;
}

export default function UtilProvidor({ children }: UtilProvidorProps) {
	addIntlUtilAsPrototypeMethod();
	return <>{children}</>;
}
