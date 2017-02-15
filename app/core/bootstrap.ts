import 'bootstrap-loader';

import * as angular from 'angular';
import {Config} from '../common/config.ts';

require('es6-promise').polyfill();

import '../lib/lib.scss';
import '../index.scss';
import './modules.ts';
import './services.ts';
import './components.ts';

angular.element(document).ready( () => {
   angular.bootstrap(document, [Config.name], {
       strictDi: true
   });
});
