// Core Import
import { browser } from '$app/env';
import { goto } from "$app/navigation";
import { addToast } from '$store/toast';
import { callFunction } from '$store';
import { DEFAULTROUTE, LOGINROUTE  } from "$constants"
import * as Sentry from '@sentry/browser';
import { Integrations as TracingIntegrations } from '@sentry/tracing';
import * as Realm from 'realm-web';
const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

let core = {
	/**
	 * Init Sentry Configuration.
	 * @param {Object} dsn - Sentry dsn url.
	 * @param {string} environment - Environment that is running.
	 */
	sentryInit: function ({ dsn, environment }) {
		Sentry.init({
			dsn,
			integrations: [new TracingIntegrations.BrowserTracing()],
			environment,
			tracesSampleRate: 0.2
		});
	},
	/**
	 * Handle data
	 **/
	handleData: async function (params) {
		if (!params) return false;
		const { toast } = params;
		addToast(toast);
	},
	/**
	 * Login Anonymous
	 **/
	anonymousLogin: async function () {
		if (browser) {
			const credentials = Realm.Credentials.anonymous();
			try {
				// Authenticate the user
				const user = await app.logIn(credentials);
				// `App.currentUser` updates to match the logged in user
				if (user.id === app.currentUser.id) return user;
			} catch (err) {
				console.error('Failed to log in', err);
			}
		}
	},
	/**
	 * Call Realm Function
	 **/
	callRealmFunction: function (params) {
		if (!params) return false;
		const getRealm = async function () {
			await callFunction(params);
		};
		getRealm()
			.then((rs) => {
				return rs;
			})
			.catch((err) => {
				return new Error(err);
			});
		return;
	},
	/*
    Login with Email and Password
    @return Boolean 
  */
		loginEmailPassword: async function(email, password){
      let response;
      const credentials = Realm.Credentials.emailPassword(email, password);
      
      try {
        const user = await app.logIn(credentials);
        if(app.currentUser.customData.isActive && user.id === app.currentUser.id){
          response = { error: false, user }
          this.redirectTo(DEFAULTROUTE);
        }else{
          app.currentUser.logOut();
          response = { error: true, user: null }
        }
      }catch(err){
          response = { error: true, user: null }
      }

      return response;
  },
	/*
    Set session Storage on browser
    @return Boolean 
  */
		setBrowser: function(key, value, local) {
			if(browser){
				if(local){
					localStorage.setItem(key, value);
				}
				sessionStorage.setItem(key, value);
			}
		},
		/*
			Get session Storage on browser
			@return Boolean 
		*/
			getBrowser: function(key, local) {
				if(browser){
					if(local){
						return localStorage.getItem(key)
					}
					return sessionStorage.getItem(key)
				}
			},
	/*
    Check if user is LoggedIn
    @return Boolean 
  */
		isLoggedIn: function (){
			if(browser){
				if(app?.currentUser?.id) return true;
					goto(LOGINROUTE);
			}
		},
		/*
			Send user to new url
			@return Boolean 
		*/
			redirectTo: function (url){
				if(browser){
					return goto(url);
				}
			},
	
		/*
			Clear session storage and logout user
			@return Boolean 
		*/
		logout: async function() {
			if(browser){
				await app?.currentUser?.logOut();
				sessionStorage.clear();
				goto(LOGINROUTE)
			}
		},
	/**
	 * RealTime Data
	 **/
	realTimeData: async function (callback, params) {
		if (!callback || !params) return false;

		const { interval, data } = params;

		if (browser) {
			setInterval(async function () {
				await callback(data);
			}, interval);
		}
	}
};

export default core;
