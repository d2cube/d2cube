import React, {createElement as h} from 'react';

import {load} from 'uinix-ui';

import config from '../system/config.js';
import system from '../system/index.js';

// @ts-ignore address type issue in uinix-ui
load({h, config, system});

const App = ({Component, pageProps}) => <Component {...pageProps} />;

export default App;
