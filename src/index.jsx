import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import { theme } from './services/theme-styles/theme';
import { Fonts } from './services/theme-styles/fonts';
import { ResetCss } from './services/theme-styles/reset-css';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
            <Fonts />
            <ResetCss />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
