import {
  createContext,
  useContext,
  useEffect, 
  useState
} from 'react';

import useSession from './useSession';

import http, {
  API
} from './axios';

const today = new Date()
  .toLocaleString('en-US', {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  });

const initialState = {
  _mode: 'light',
  _auth: null,
  _lg: null,
  _common: null,
  _loaded: new Date(),
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},

  loadingLang: () => {},
  changeLang: () => {},
  changeMode: () => {},
}

export const ResourceContext = createContext(initialState);

const useResource = () => useContext(ResourceContext);

const ResourceProvider = ({ children }) => {
  const [resources, setResources] = useSession('resources', {
    _mode: initialState._mode,
    _auth: initialState._auth,
    _lg: initialState._lg,
    _common: initialState._common,
    _loaded: initialState._loaded,
  });

  useEffect(() => {
    loadingLang();
  }, []);

  const handleSignIn = () => {
    // try {
    //   const auth = await http.post(API.signInUrl, checking)
    //     .then((resp) => {
    //       const { _auth } = resp.data
    //       console.log('_auth: ', _auth.email)
    //       return _auth
    //     })
    //     .catch(function(err) { 
    //       console.log('err: ', err)
    //       alert(`err: ${resources._lg.message.login_not_found}`)
    //     })
    //     .finally(function() {
    //       // console.log('finally')
    //     });

    //   if (!auth) {
    //     return false
    //   }

    //   setResources({
    //     _auth: auth,
    //     _mode: resources._mode,
    //     _lg: resources._lg,
    //     _loaded: resources._loaded,
    //   });

    //   NativeModules.DevSettings.reload();
    // } catch (err) {
    //   console.log('handleSignin-error: ', err)
    // }
  }

  const handleSignUp = () => {

  }
  const handleSignOut = () => {
    
  }

  const changeMode = (mode) => {
    setResources({
      ...resources,
      _mode: mode
    });
    document.getElementsByTagName("html")[0].setAttribute('class', mode)
  }

  const loadingLang = async () => {
    const loaded = new Date(resources?._loaded)
      .toLocaleString('en-US', {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      });
    const storage = await JSON.parse(localStorage.getItem('resources'));

    document.getElementsByTagName("html")[0].setAttribute('lg', storage?._locales?.current || 'vn')
    document.getElementsByTagName("html")[0].setAttribute('class', storage?._mode || initialState._mode)

    if (!storage?._lg || loaded != today) {
      try {
        http.get(`${API.getLanguageUrl}`)
          .then((resp) => {
            const { _lg, _locales, _common } = resp.data;
            _lg & storage & setResources({
              ...storage,
              _lg,
              _locales,
              _common,
              _loaded: new Date()
            });
          })
          .catch(function(err) { 
            // console.log('err: ', err)
          })
          .finally(function() {
            // console.log('finally')
          })
      } catch (error) {
        // console.log('loadingLang-error: ', error)
      }
    }
  }

  const changeLang = async (lang) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const storage = await JSON.parse(localStorage.getItem('resources'));
    try {
      http.post(`${API.changeLanguageUrl}/${lang}`)
        .then((resp) => {
          const { _lg, _locales, _common } = resp.data;
          _lg & storage & setResources({
            ...storage,
            _lg,
            _locales,
            _common,
            _loaded: new Date()
          });

          if(_lg.length === 0) {
            setTimeout(() => { location.reload() }, 500)
          }
        })
        .catch(function(err) { 
          // console.log('err: ', err)
        })
    } catch (error) {
      // console.log('loadingLang-error: ', error)
    }
  }

  return (
    <ResourceContext.Provider
      value={{ 
        ...resources,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        loadingLang,
        changeLang,
        changeMode
      }}
      >
      {children}
    </ResourceContext.Provider>
  );
}

export {
  useResource
}

export default ResourceProvider;