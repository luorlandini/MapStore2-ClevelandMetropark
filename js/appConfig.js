/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import security from '@mapstore/reducers/security';

import pluginsDef from './plugins.js';

export default {
    pages: [{
        name: "home",
        path: "/",
        component: require('@mapstore/product/pages/Maps').default,
        pageConfig: {
            name: 'home'
        }
    }, {
        name: "maps",
        path: "/maps",
        component: require('@mapstore/product/pages/Maps').default,
        pageConfig: {
            name: 'maps'
        }
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId",
        component: require('@mapstore/product/pages/MapViewer').default,
        pageConfig: {
            name: 'home'
        }
    }, {
        name: "mapviewer",
        path: "/viewer/:mapId",
        component: require('@mapstore/product/pages/MapViewer').default
    }],
    pluginsDef,
    initialState: {
        defaultState: {
            mousePosition: { enabled: false },
            controls: {}
        },
        mobile: {
            mapInfo: { enabled: true, infoFormat: 'application/json' },
            mousePosition: { enabled: true, crs: "EPSG:4326", showCenter: true }
        }
    },
    themeCfg: {
        theme: "default"
    },
    appReducers: {
        security
    },
    appEpics: {},
    storeOpts: {
        persist: {
            whitelist: ['security']
        }
    }
};
