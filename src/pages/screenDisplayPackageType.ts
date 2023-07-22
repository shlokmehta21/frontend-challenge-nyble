import { UserTypeType } from 'auth/userContext';
import { AuthWrapperCredentials } from 'pages/allScreensPage/AuthWrappers';
import { GraphqlMock } from '../graphql/graphqlMockType';

/*
  A ScreenDisplayPackage<T> contains all necessary info for screen to be displayed on
  the AllScreensPage

  T should be the state type for the page containing the screen

  @route is the route used in our router
  @gotoRoute is an optional route used to go to this screen
    - This might be different from @route if @route uses something like /:merchantSlug
  @field credentials: Set this field if screen is on authenticated page, otherwise leave it blank
  @field graphqlMocks: Not implemented yet
  */

export type ScreenDisplayPackage<T> = {
  route: string;
  gotoRoute?: string;
  routeNotExact?: boolean; // we default to exact routes
  pageState: Partial<T>;
  graphqlMocks?: Array<GraphqlMock>;
  credentials?: keyof UserTypeType | AuthWrapperCredentials;
};
