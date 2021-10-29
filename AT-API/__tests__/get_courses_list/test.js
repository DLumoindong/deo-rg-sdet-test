import endpoint from './endpoint';
import data from './data';
import tc from './test_case';
import * as er from './expect'
import schema from './schema.json';
import schemaBR from './schema_bad_request.json'

describe(`@skillAcademyWeb ${tc.type[1]} ${tc.describe}`, () => {
  test(`${tc.positive.getCourseListStd}`, async () => {
    const query = data(1, 20, '', '', '', 0, 9999999, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
  });

  test(`${tc.positive.getCourseListPage}`, async () => {
    const query1 = data(1, 20, '', '', '', 0, 9999999, 0, 9999999);
    const resp1 = await endpoint(query1);

    const query = data(2, 20, '', '', '', 0, 9999999, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectNotEqual(resp, resp1.body.data.data[0].courseDescription, resp.body.data.data[0].courseDescription)
  });

  test(`${tc.positive.getCourseListPageSize}`, async () => {
    const query = data(1, 50, '', '', '', 0, 9999999, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, resp.body.data.data.length, 50)
  });

  test(`${tc.positive.getCourseListKW}`, async () => {
    const kw = 'Bahasa'
    const query = data(1, 20, kw, '', '', 0, 9999999, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectContain(resp, resp.body.data.data[0].courseDescription, kw.toLowerCase())
  });

  test(`${tc.positive.getCourseListPriceRange}`, async () => {
    const query = data(1, 20, '', '', '', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, ((resp.body.data.data[0].price >= 100000) && (resp.body.data.data[0].price <=150000)), true)
    er.expectEqual(resp, ((resp.body.data.data[last].price >= 100000) && (resp.body.data.data[last].price <=150000)), true)
  });

  test(`${tc.positive.getCourseListAvgRatingAsc}`, async () => {
    const query = data(1, 20, '', 'average_rating', 'asc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].rating <= resp.body.data.data[0].rating),  true)
  });

  test(`${tc.positive.getCourseListAvgRatingDesc}`, async () => {
    const query = data(1, 20, '', 'average_rating', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].rating >= resp.body.data.data[0].rating),  true)
  });

  test(`${tc.positive.getCourseListTotalRatingAsc}`, async () => {
    const query = data(1, 20, '', 'total_rating', 'asc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].totalRating <= resp.body.data.data[0].totalRating),  true)
  });

  test(`${tc.positive.getCourseListTotalRatingDesc}`, async () => {
    const query = data(1, 20, '', 'total_rating', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].totalRating >= resp.body.data.data[0].totalRating),  true)
  });

  test(`${tc.positive.getCourseListUpdatedAtAsc}`, async () => {
    const query = data(1, 20, '', 'updated_at', 'asc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].updatedAt <= resp.body.data.data[0].updatedAt),  true)
  });

  test(`${tc.positive.getCourseListUpdatedAtDesc}`, async () => {
    const query = data(1, 20, '', 'updated_at', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].updatedAt >= resp.body.data.data[0].updatedAt),  true)
  });

  test(`${tc.positive.getCourseListPriceAsc}`, async () => {
    const query = data(1, 20, '', 'price', 'asc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].price <= resp.body.data.data[0].price),  true)
  });

  test(`${tc.positive.getCourseListPriceDesc}`, async () => {
    const query = data(1, 20, '', 'price', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    const last = resp.body.data.data.length - 1
    er.expectStatus(resp, 200);
    er.expectSchema(resp, schema);
    er.expectEqual(resp, (resp.body.data.data[0].price >= resp.body.data.data[0].price),  true)
  });
});

describe(`@skillAcademyWeb ${tc.type[0]} ${tc.describe}`, () => {
  // NO VALIDATION ON DURATION RANGE INPUT
  /* test(`${tc.negative.getCourseListInvDurationRange}`, async () => {
    const query = data(1, 20, '', '', '', 0, 9999999, 10, 1);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schema);
  }); */

  // NO VALIDATION ON PRICE RANGE INPUT
  /* test(`${tc.negative.getCourseListInvPriceRange}`, async () => {
    const query = data(1, 20, '', '', '', 200000, 150000, 0, 999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schema);
  }); */

  test(`${tc.negative.getCourseListInvPage}`, async () => {
    const query = data('1a', 20, '', 'price', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListInvPageSize}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 100000, 150000, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListNoMinPrice}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', '', 150000, 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListNoMaxPrice}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 0, '', 0, 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListNoMinDuration}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 0, 999999999, '', 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListInvMinDuration}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 0, 999999999, '0a', 9999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListInvMaxDuration}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 0, 999999999, 0, '9999999');
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListInvMinPrice}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', '0a', 999999999, 0, 999999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });

  test(`${tc.negative.getCourseListInvMaxPrice}`, async () => {
    const query = data(1, '20a', '', 'price', 'desc', 0, '999999999a', 0, 999999999);
    resp = await endpoint(query);

    er.expectStatus(resp, 400);
    er.expectSchema(resp, schemaBR);
    er.expectSnapshot(resp);
  });
});