import { IntlType } from '@/util/intl';

declare global {
	interface Date {
		toIntlString: (type?: IntlType) => string;
	}
}
