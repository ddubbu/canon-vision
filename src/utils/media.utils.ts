import { css, SerializedStyles } from '@emotion/react';

export const MediaQuerySize = {
	Mobile: 768,
	// Tablet: 900,
};

export const BreakPoint = ({
	PcStyle,
	// TabletStyle,
	MobileStyle,
}: {
	PcStyle: SerializedStyles;
	// TabletStyle?: SerializedStyles;
	MobileStyle: SerializedStyles;
}): SerializedStyles => css`
	@media (max-width: ${MediaQuerySize.Mobile}px) {
		${MobileStyle}
	}

	@media (min-width: ${MediaQuerySize.Mobile + 1}px) {
		${PcStyle}
	}
`;
