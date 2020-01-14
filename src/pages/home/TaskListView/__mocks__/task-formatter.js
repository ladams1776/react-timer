// url: https://jestjs.io/docs/en/es6-class-mocks
// import this named export into your test file.
export const mockFormat = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { format: mockFormat };
});

export default mock;
