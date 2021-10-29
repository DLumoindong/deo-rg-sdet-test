const chai = require('chai');

const expectChai = chai.expect;
chai.use(require('chai-sorted'));

export const output = (response) => ({
    text: `\n  Request: ${JSON.stringify(response.request, null, 4)} \n  Response: ${JSON.stringify(response.body)}`,
});

export const expectStatus = (response, expectedStatus) => {
    expect((response).status, `Reason: Wrong HTTP Status Code ${output(response).text}`).toEqual(expectedStatus);
};

export const expectEqual = (response, actualData, expectedBody) => {
    expect(actualData, `Reason: Actual Data is not equal with Expected Data ${output(response).text}`).toEqual(expectedBody);
};

export const expectContain = (response, actualData, expectedBody) => {
    expect(actualData, `Reason: Actual Data is not contain with Expected Data ${output(response).text}`).toContain(expectedBody);
};

export const expectSchema = (response, expectedSchema) => {
    expect((response).body, `Reason: Wrong Response Schema ${output(response).text}`).toMatchSchema(expectedSchema);
};

export const expectNotEqual = (response, actualData, expectedBody) => {
    expect(actualData, `Reason: Actual Data should not equal with Expected Data ${output(response).text}`).not.toEqual(expectedBody);
};

export const expectSnapshot = (response) => {
    expect((response).body, `Reason: Response Should be the same with Snapshot ${output(response).text}`).toMatchSnapshot();
};
  
