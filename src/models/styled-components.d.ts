import 'styled-components';
import { ColorsType } from '../services/theme-styles/colors';

declare module 'styled-components' {

  export interface DefaultTheme {
    colors: ColorsType,
    fonts: {
      OpenSansLight: string,
      OpenSansRegular: string,
      OpenSansBold: string,
    }
  }
}
