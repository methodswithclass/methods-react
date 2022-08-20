import * as h from './history.service';
import * as u from './utility.service';

let statename = '';

const roots = ['home', 'login'];

const setStateName = (state) => {
  // previousIndex++;

  statename = state;

  h.$history(state);

  //   $('#menubutton').css({ display: 'block' });
};

const back = [
  {
    id: 'home',
    state: 'home',
    back: 'home',
  },
  {
    id: 'contact',
    state: 'contact',
    back: 'home',
  },
  {
    id: 'chris',
    state: 'chris',
    back: 'contact',
  },
  {
    id: 'about',
    state: 'about',
    back: 'home',
  },
  {
    id: 'what',
    state: 'what',
    back: 'about',
  },
  {
    id: 'apps',
    state: 'apps',
    back: 'what',
  },
  {
    id: 'hire',
    state: 'hire',
    back: 'what',
  },
  {
    id: 'settings',
    state: 'settings',
    back: 'home',
  },
];

export const states = [
  {
    name: 'home',
    url: '/home',
    resolve: [
      {
        token: 'home',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('home');
        },
      },
    ],
  },
  {
    name: 'about',
    url: '/about',
    resolve: [
      {
        token: 'about',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('about');
        },
      },
    ],
  },
  {
    name: 'what',
    url: '/about/whatwedo',
    resolve: [
      {
        token: 'what',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('what');
        },
      },
    ],
  },
  {
    name: 'apps',
    url: '/about/whatwedo/apps',
    resolve: [
      {
        token: 'apps',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('apps');
        },
      },
    ],
  },
  {
    name: 'hire',
    url: '/about/whatwedo/hire',
    resolve: [
      {
        token: 'hire',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('hire');
        },
      },
    ],
  },
  {
    name: 'contact',
    url: '/contact',
    resolve: [
      {
        token: 'contact',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('contact');
        },
      },
    ],
  },
  {
    name: 'chris',
    url: '/contact/chris',
    resolve: [
      {
        token: 'chris',
        deps: ['$transition$'],
        resolveFn: (trans) => {
          setStateName('chris');
        },
      },
    ],
  },
];

const backMap = back.reduce((accum, item) => {
  return { ...accum, [item.id]: item };
}, {});

const stateMap = states.reduce((accum, item) => {
  return { ...accum, [item.name]: item };
}, {});

const urlMap = states.reduce((accum, item) => {
  return { ...accum, [item.url]: item };
}, {});

const setup = () => {
  h.setup({
    roots,
    index: 0,
    states,
  });
  setStateName(urlMap[window.location.pathname]?.name);
};

setup();

export const getName = () => {
  // var name = router.stateService.current.name;

  console.log('get name in service', statename);

  return statename;
};

export const getUrl = (name) => {
  const state = stateMap[name];
  return state.url;
};

export const getBack = () => {
  const state = getName();

  return backMap[state]?.back || 'home';
};

export const getTitle = () => {
  const name = getName();

  // console.log("get name", state, name);

  var capital = name.slice(0, 1);

  return capital.toUpperCase() + name.slice(1);
};

export const goto = (state, params) => {
  console.log('goto state', state, 'with params', params);
  u.closeMenu('body');
  setStateName(state);
  window.location.href = getUrl(state);
};
