export default {
    describe: 'Get List of Courses',
    type: ['@negative', '@positive'],
    positive: {
      getCourseListStd: 'As a Guest, I should be able to see the list of available courses',
      getCourseListPage: 'As a Guest, I should be able to see the list of available courses on different pages',
      getCourseListPageSize: 'As a Guest, I should be able to see the list of available courses with custom page size',
      getCourseListKW: 'As a Guest, I should be able to see the list of available courses based on the keyword',
      getCourseListPriceRange: 'As a Guest, I should be able to see the list of available courses in a price range',
      getCourseListAvgRatingDesc: 'As a Guest, I should be able to see the list of available courses ordered by highest rating',
      getCourseListAvgRatingAsc: 'As a Guest, I should be able to see the list of available courses ordered by lowest rating',
      getCourseListTotalRatingDesc: 'As a Guest, I should be able to see the list of available courses ordered by highest number of reviews',
      getCourseListTotalRatingAsc: 'As a Guest, I should be able to see the list of available courses ordered by lowest number of reviews',
      getCourseListUpdatedAtDesc: 'As a Guest, I should be able to see the list of available courses ordered by latest update',
      getCourseListUpdatedAtAsc: 'As a Guest, I should be able to see the list of available courses ordered by oldest update',
      getCourseListPriceDesc: 'As a Guest, I should be able to see the list of available courses ordered by highest price',
      getCourseListPriceAsc: 'As a Guest, I should be able to see the list of available courses ordered by lowest price',
      // getCourseListDurationRange: 'As a Guest, I should be able to see the list of available courses in a duration range',  NO VALIDATION AVAILABLE
    },
    negative: {
      // NO VALIDATION ON BOTH CASES
      /* getCourseListInvPriceRange: 'As a Guest, I should not be able to set minimum price higher than maximum price',
      getCourseListInvDurationRange: 'As a Guest, I should not be able to set minimum duration higher than maximum duration', */
      getCourseListInvPage: 'As a Guest, I should not be able to see the list of available courses with invalid page input',
      getCourseListInvPageSize: 'As a Guest, I should not be able to see the list of available courses with invalid page size input',
      getCourseListNoMinPrice: 'As a Guest, I should not be able to see the list of available courses without minimum price input',
      getCourseListNoMaxPrice: 'As a Guest, I should not be able to see the list of available courses without maximum price input',
      getCourseListNoMinDuration: 'As a Guest, I should not be able to see the list of available courses without minimum duration input',
      getCourseListNoMaxDuation: 'As a Guest, I should not be able to see the list of available courses without minimum price input',
      getCourseListInvMinPrice: 'As a Guest, I should not be able to see the list of available courses with invalid minimum price input',
      getCourseListInvMaxPrice: 'As a Guest, I should not be able to see the list of available courses with invalid maximum price input',
      getCourseListInvMinDuration: 'As a Guest, I should not be able to see the list of available courses with invalid minimum duration input',
      getCourseListInvMaxDuration: 'As a Guest, I should not be able to see the list of available courses with invalid minimum duration input',
    },
  };