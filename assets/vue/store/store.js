// jshint ignore: start
/* global themeisleSitesLibApi */
/* exported themeisleSitesLibApi */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use( Vuex );

export default new Vuex.Store( {
	state: {
		ajaxLoader: false,
		sitesData: {
			migrate_data: {},
			i18n: {},
			local: {},
			remote: {},
			upsell: {},
		},
		previewOpen: false,
		errorToast: '',
		importModalState: false,
		importing: false,
		previewData: {},
		aboutUrl: themeisleSitesLibApi.aboutUrl,
		strings: themeisleSitesLibApi.i18ln ,
		homeUrl: themeisleSitesLibApi.homeUrl,
		currentStep: 'inactive',
		importSteps: themeisleSitesLibApi.importSteps,
		editor: '',
		frontPageId: -1,
		migration: 'inactive',
		onboard: themeisleSitesLibApi.onboarding,
		contentImported: themeisleSitesLibApi.contentImported,
		importOptions: {
			content: true,
			customizer: true,
			widgets: true,
			installablePlugins: {},
			isMigration: false
		},
	},
	actions,
	mutations
} )
