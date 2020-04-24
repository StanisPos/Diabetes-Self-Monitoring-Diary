import { colors, ColorsType } from '../colors';

type Theme = {
	colors: ColorsType,
	fonts: {
		OpenSansLight: string,
		OpenSansRegular: string,
		OpenSansBold: string,
	},
};

export const theme: Theme = {
	colors,
	fonts: {
		OpenSansLight: "'OpenSans Light', sans-serif",
		OpenSansRegular: "'OpenSans Regular', sans-serif",
		OpenSansBold: "'OpenSans Bold', sans-serif",
	},
};
