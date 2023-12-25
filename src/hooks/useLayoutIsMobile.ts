import { useCallback, useState } from 'react';
import { MediaQuerySize } from '@/utils/media.utils';
import useResize from './useResize';

const useLayoutIsMobile = (): boolean => {
	const checkIsMobile = useCallback(() => {
		if (typeof window !== 'undefined') {
			const isMobile = window.innerWidth <= MediaQuerySize.Mobile;
			return isMobile;
		} else {
			return false;
		}
	}, []);

	const [isMobile, setIsMobile] = useState(checkIsMobile());

	const resizeHandler = useCallback(() => setIsMobile(checkIsMobile()), []);
	useResize(resizeHandler);

	return isMobile;
};

export default useLayoutIsMobile;
