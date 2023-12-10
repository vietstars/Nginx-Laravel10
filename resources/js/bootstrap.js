/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// import axios from 'axios';
// window.axios = axios;

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// });

/**
 * [repair fill text to string by $1, $2..]
 * @param {[type]} text      [array string]
 * @return {[string]}        [string]
 */
String.prototype.repair = function (...text) {
  let str=this;
  text.map((txt, i) => {
    return str = str.replaceAll(`$${i+1}`, txt);
  })
  return str;
}

/**
 * chunk conver object to object array [{…1,2}, {…3,4}, {…5,6}] 
 * @param  {Object} {objs}    [{{…1}, {…2}, {…3} , {…4}, {…5}, {…6}}]
 * @param  {Number} size      [size of chunk]
 * @param  {Array}  keys      [key to chunk]
 * @return {[array]}          [Array]
 */
Array.prototype.chunk = function (objs={}, size=2, keys=['text', 'icon']) {
  let i = 0;

  if ( objs == {} ) {
    return this
  }

  this.length = 0

  while (i < Object.keys(objs).length) {
    let obj = {}, group = '';
    Object.keys(objs).slice(i, i += size).map((e, k)=> {
      if (!k) {
        group = e;
        obj[group] = {};
      }
      obj[group][keys[k]] = objs[e]
      return obj
    })
    this.push(obj[group])
  }

  return this;
}