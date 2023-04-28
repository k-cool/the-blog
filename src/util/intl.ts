export const intl = new Intl.DateTimeFormat('ko', {
	dateStyle: 'medium',
	timeStyle: 'medium',
	hourCycle: 'h12',
});

export type IntlType = 'full' | 'date' | 'time';

export const toIntlString = (date: Date, type: IntlType = 'full') => {
	switch (type) {
		case 'full':
			return new Intl.DateTimeFormat('ko', {
				dateStyle: 'medium',
				timeStyle: 'short',
				hourCycle: 'h12',
			})
				.format(date)
				.replaceAll('. ', '-')
				.replaceAll('.', '');
		case 'date':
			return new Intl.DateTimeFormat('ko', { dateStyle: 'medium' })
				.format(date)
				.replaceAll('. ', '-')
				.replaceAll('.', '');
		case 'time':
			return new Intl.DateTimeFormat('ko', {
				timeStyle: 'short',
				hourCycle: 'h12',
			}).format(date);
	}
};

export const addIntlUtilAsPrototypeMethod = () => {
	Date.prototype.toIntlString = function (type: IntlType = 'full') {
		return toIntlString(this, type);
	};
};
