import { createGlobalStyle } from 'styled-components';

import OpenSansLight from './files/OpenSans-Light.woff';
import OpenSansLight2 from './files/OpenSans-Light.woff2';

import OpenSansRegular from './files/OpenSans-Regular.woff';
import OpenSansRegular2 from './files/OpenSans-Regular.woff2';

import OpenSansBold from './files/OpenSans-Bold.woff';
import OpenSansBold2 from './files/OpenSans-Bold.woff2';

export const Fonts = createGlobalStyle`

    @font-face {
      font-family: 'OpenSans Light';
      src: url(${OpenSansLight2}) format('woff2'), url(${OpenSansLight}) format('woff');
      font-weight: 300;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'OpenSans Regular';
      src: url(${OpenSansRegular2}) format('woff2'), url(${OpenSansRegular}) format('woff');
      font-weight: 400;
      font-style: normal;
    }
    
    @font-face {
      font-family: 'OpenSans Bold';
      src: url(${OpenSansBold2}) format('woff2'), url(${OpenSansBold}) format('woff');
      font-weight: 500;
      font-style: normal;
    }
`;
