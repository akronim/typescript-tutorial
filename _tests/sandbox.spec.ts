import { debounce } from '../src/misc/debounce';

describe('later() function', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });


    test('debounced function should only be called once after delay time', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);

        debouncedFn();
        debouncedFn();
        debouncedFn();

        expect(mockFn).toHaveBeenCalledTimes(0);

        jest.advanceTimersByTime(1000);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('debounced function should be called with the correct arguments', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounce(mockFn, 1000);

        debouncedFn('hello', 'world');

        jest.advanceTimersByTime(1000);

        expect(mockFn).toHaveBeenCalledWith('hello', 'world');
    });
})

