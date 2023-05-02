import { higherOrderFunctionDemo } from "../src/misc/hof"

describe("hofDemo", () => {
    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    it("should log 'foobar' to the console before calling the passed function", () => {
        const mockFunc = jest.fn();
        const hof = higherOrderFunctionDemo(mockFunc);
        hof();
        expect(consoleLogSpy).toHaveBeenCalledWith("foobar");
        expect(mockFunc).toHaveBeenCalled();
    });

    it("should call the passed function with the same arguments", () => {
        const mockFunc = jest.fn();
        const hof = higherOrderFunctionDemo(mockFunc);
        hof(1, "foo", true);
        expect(mockFunc).toHaveBeenCalledWith(1, "foo", true);
    });
});