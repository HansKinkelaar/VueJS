/**
 *  file: assets/icons.js
 *  date: 29/07/2022
 *  description: this arquive contains the logic of icons in the application.
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faTrash, faUserEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);

