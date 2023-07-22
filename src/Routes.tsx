import { History, Location } from 'history';
import { pathToRegexp } from 'path-to-regexp';

export const HOME_PAGE_ROUTE = '/';
/* Page Routes */

/* Route Testers */
export const HOME_PAGE_TESTER = pathToRegexp(HOME_PAGE_ROUTE);


/* Page Testers */
export const isOnHomePageRoute = (location: Location<History>) =>
  HOME_PAGE_TESTER.test(location.pathname);
