import {} from 'styled-components';
import themeObject from 'GlobalTheme';

/* 
This file exists so we get type suggestions on the theme in styled-components
*/

declare module 'styled-components' {
  type Theme = typeof themeObject;
  export interface DefaultTheme extends Theme {}
}
