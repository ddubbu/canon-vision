import { useEffect } from 'react';
import useEventListener from './useEventListener';

const useResize = (resizeFunc: () => void): void => {
	useEventListener('resize', resizeFunc);

	useEffect(() => {
		resizeFunc();
	}, [resizeFunc]);
};

export default useResize;
