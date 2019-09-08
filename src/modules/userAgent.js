import isMobile from 'ismobilejs';
import windowSize from "get-window-size";
import browser from "browser-detect";

const userAgent = {
  state: {
    window: {
      width: windowSize().width,
      height: windowSize().height
    },
    device: {
      isPhone: isMobile.phone,
      isTablet: isMobile.tablet,
      isMobile: isMobile.any
    },
    orientation: null,
    browser: {
      name: browser().name,
      version: browser().version
    },
    screentest: false,
    isScrollLock: false,
    userLanguage: navigator.language.substring(0, 2).toLowerCase() || navigator.userLanguage.substring(0, 2).toLowerCase()
  },
  mutations: {
    DETECT_DEVICE(state, devices) {
      state.device = devices;
    },
    DETECT_ORIENTATION(state, payload) {
      if (payload) {
        state.orientation = "landscape";
      } else {
        state.orientation = "portrait";
      }
    },
    UPDATE_WINDOW_PARAMS(state, payload) {
      state.window = payload;
    },
    UPDATE_SCREENTEST: (state, payload) => {
      state.screentest = payload;
    },
    UPDATE_LOCK_STATE: (state, payload) => {
      state.isScrollLock = payload;
    },
    DETECT_USER_LANGUAGE: (state, payload) => {
      state.userLanguage = payload;
    }
  }
};

export default userAgent;
