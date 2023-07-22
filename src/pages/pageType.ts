import { ScreenDisplayPackage } from './screenDisplayPackageType';

/* The type for most of our standard top level pages */
export type PageType = {
  ({ stateOverrides }: { stateOverrides?: object }): JSX.Element;
  screenDisplayPackages?: ScreenDisplayPackage<any>[][];
};
