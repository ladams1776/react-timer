/**
 * Use this to get the element in the sut,
 * as long as the sut has elements that have the
 * correct attribute (data-test-id)
 * @param {String} id
 */
const findByTestId = (wrapper, id) => wrapper.find(`[data-test-id='${id}']`);

export default findByTestId;
