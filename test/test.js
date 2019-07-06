jest.useFakeTimers();

const { onRenderBody } = require("../src/gatsby-ssr");

describe("gatsby-plugin-hubspot", () => {
  describe("onRenderBody", () => {
    const setup = (options = {}) => {
      const setPostBodyComponents = jest.fn();
      const reporter = {
        warn: jest.fn()
      };
      onRenderBody({ reporter, setPostBodyComponents }, options);
      return { options, reporter, setPostBodyComponents };
    };
    it("imports", () => {
      expect(onRenderBody).toBeDefined();
      expect(typeof onRenderBody).toEqual("function");
    });
    it("reports when neither jsAPIKey nor agilecrmOrgName is provided", () => {
      const { reporter, setPostBodyComponents } = setup();
      expect(setPostBodyComponents).toHaveBeenCalledTimes(0);
      expect(reporter.warn).toHaveBeenCalledTimes(1);
      expect(reporter.warn).toHaveBeenCalledWith(
        expect.stringContaining(
          "Neither jsAPIKey is provided nor agilecrmOrgName is provided"
        )
      );
    });
    it("reports when no jsAPIKey is provided", () => {
      const { reporter, setPostBodyComponents } = setup({
        agilecrmOrgName: "abc-xyz"
      });

      expect(setPostBodyComponents).toHaveBeenCalledTimes(0);
      expect(reporter.warn).toHaveBeenCalledTimes(1);
      expect(reporter.warn).toHaveBeenCalledWith(
        expect.stringContaining("No jsAPIKey is provided")
      );
    });
    it("reports when no agilecrmOrgName is provided", () => {
      const { reporter, setPostBodyComponents } = setup({
        jsAPIKey: "121312434"
      });
      expect(setPostBodyComponents).toHaveBeenCalledTimes(0);
      expect(reporter.warn).toHaveBeenCalledTimes(1);
      expect(reporter.warn).toHaveBeenCalledWith(
        expect.stringContaining("No agilecrmOrgName is provided")
      );
    });
    it("works when jsAPIKey as well as agilecrmOrgName is provided", () => {
      const options = {
        jsAPIKey: 12334567890,
        agilecrmOrgName: "abc-xyz"
      };
      const { reporter, setPostBodyComponents } = setup(options);

      expect(reporter.warn).toHaveBeenCalledTimes(0);
      expect(setPostBodyComponents).toHaveBeenCalledTimes(1);
      const resultObj = setPostBodyComponents.mock.calls[0][0];
      expect(Array.isArray(resultObj)).toBe(true);
      expect(resultObj[0].type).toEqual("script");
      expect(resultObj[0].props.src).toMatch(/abc-xyz/);
      expect(resultObj[1].type).toEqual("script");
      expect(resultObj[1].type).toEqual("script");
    });
  });
});
