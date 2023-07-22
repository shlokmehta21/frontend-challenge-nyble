import { gql, QueryResult, useQuery } from '@apollo/client';
import { StatHolidays, ErrorResponse } from '../serverModel';
import { StatHolidaysFragment, ErrorResponseFragment } from '../fragments';

export interface StatHolidaysResponse {
  success: boolean;
  data?: StatHolidays;
  error?: ErrorResponse;
}

const useStatHolidaysQuery = (
  statHolidaysFragment = StatHolidaysFragment,
  errorResponseFragment = ErrorResponseFragment,
): QueryResult<{statHolidays: StatHolidaysResponse}> => {
  const statHolidaysGqlString = gql`
    ${statHolidaysFragment()}
    ${errorResponseFragment()}
    query StatHolidays {
      statHolidays {
        success
        data {
          ...StatHolidaysFragment
        }
        error {
          ...ErrorResponseFragment
        }
      }
    }
  `

  return useQuery<{statHolidays: StatHolidaysResponse}>(statHolidaysGqlString, {
    fetchPolicy: 'no-cache',
  });
};

export default useStatHolidaysQuery
