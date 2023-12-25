import { useEffect, useRef } from 'react';

interface EventListener {
	(evt: Event): void;
}

const useEventListener = (
	eventName: string,
	handler: EventListener,
	target?: HTMLElement,
	option?: AddEventListenerOptions
): void => {
	const savedHandler = useRef<EventListener>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const element = target ?? window;
		const isSupported = Boolean(element && element.addEventListener);
		const eventListener = (event: Event) => savedHandler.current?.(event);

		if (isSupported) {
			element.addEventListener(eventName, eventListener, option);
		}
		return () => {
			isSupported && element.removeEventListener(eventName, eventListener, option);
		};
	}, [eventName, option, target]);
};

export default useEventListener;
