export const andFn = function andFn(a, cy) { return cy.and(a);  }
export const asFn = function asFn(a, cy) { return cy.as(a);  }
export const backFn = function backFn(cy) { return cy.back();  }
export const blurFn = function blurFn(a, cy) { return cy.blur(a);  }
export const checkFn = function checkFn(a, cy) { return cy.check(a);  }
export const childrenFn = function childrenFn(a, cy) { return cy.children(a);  }
export const clearFn = function clearFn(cy) { return cy.clear();  }
// root
export const clearCookieFn = function clearCookieFn(a, cy) { return cy.clearCookie(a);  }
// root
export const clearCookiesFn = function clearCookiesFn(a, cy) { return cy.clearCookies(a);  }
// root
export const clearLocalStorageFn = function clearLocalStorageFn(a, cy) { return cy.clearLocalStorage(a);  }
export const clickFn = function clickFn(cy) { return cy.click();  }
// root
export const clockFn = function clockFn(cy) { return cy.clock();  }
export const closestFn = function closestFn(a, cy) { return cy.closest(a);  }

// both
const containsArgs = (isJust, fromJust, props) => {
  if(isJust(props.selector)) {
    const selector = fromJust(props.selector);
    const options = isJust(props.options) ? fromJust(props.options) : undefined;
    return [selector, props.content, options];
  }
  else {
    const options = isJust(props.options) ? fromJust(props.options) : undefined;
    return [props.content, options];
  }
};

export const containsFn = (isJust, fromJust, props, cy) => {
  return cy.contains(...containsArgs(isJust, fromJust, props))
}

export const containsqFn = (isJust, fromJust, props, q, cy) => {
  return q.contains(...containsArgs(isJust, fromJust, props))
}

export const dblclickFn = function dblclickFn(cy) { return cy.dblclick();  }
// both
export const debugFn = function debugFn(a, cy) { return cy.debug(a);  }
// root
export const documentFn = function documentFn(cy) { return cy.document();  }
// export const eachFn = function eachFn(a, cy) { return cy.each(a);  }
export const endFn = function endFn(cy) { return cy.end();  }
export const eqFn = function eqFn(a, cy) { return cy.eq(a);  }
// root
export const execFn = function execFn(a, cy) { return cy.exec(a);  }
export const filterFn = function filterFn(a, cy) { return cy.filter(a);  }
export const findFn = function findFn(a, cy) { return cy.find(a);  }
export const firstFn = function firstFn(a) { return a.first();  }
// root
export const fixtureFn = function fixtureFn(a, cy) { return cy.fixture(a);  }
export const focusFn = function focusFn(a, cy) { return cy.focus(a);  }
// root
export const focusedFn = function focusedFn(a, cy) { return cy.focused(a);  }
// root
export const getFn = function getFn(isJust, fromJust, actionString, props, cy) {
  const action = actionString(props.action);
  const options = isJust(props.options) ? fromJust(props.options) : undefined;
  return cy.get(action, options);
}

// root
export const getCookieFn = function getCookieFn(a, cy) { return cy.getCookie(a);  }
// root
export const getCookiesFn = function getCookiesFn(cy) { return cy.getCookies();  }
// root
export const goFn = function goFn(a, cy) { return cy.go(a);  }
// root
export const hashFn = function hashFn(cy) { return cy.hash();  }
// export const hoverFn = function hoverFn(a, cy) { return cy.hover(a);  }

export const invokeFn = function invokeFn(a, cy) { return cy.invoke(a);  }

// export const itsFn = function itsFn(a, cy) { return cy.its(a);  }
export const lastFn = function lastFn(a, cy) { return cy.last(a);  }

omport Foreign (Foreign)
// root
export const locationFn = function locationFn(a, cy) { return cy.location(a);  }
// root
export const logFn = function logFn(a, cy) { return cy.log(a);  }
export const nextFn = function nextFn(cy) { return cy.next();  }
export const nextAllFn = function nextAllFn(a, cy) { return cy.nextAll(a);  }
export const nextUntilFn = function nextUntilFn(a, cy) { return cy.nextUntil(a);  }
export const notFn = function notFn(a, cy) { return cy.not(a);  }
export const parentFn = function parentFn(a, cy) { return cy.parent(a);  }
export const parentsFn = function parentsFn(a, cy) { return cy.parents(a);  }
export const parentsUntilFn = function parentsUntilFn(a, cy) { return cy.parentsUntil(a);  }
// both
export const pauseFn = function pauseFn(a, cy) { return cy.pause(a);  }
export const prevFn = function prevFn(a, cy) { return cy.prev(a);  }
export const prevAllFn = function prevAllFn(a, cy) { return cy.prevAll(a);  }
export const prevUntilFn = function prevUntilFn(a, cy) { return cy.prevUntil(a);  }
// root
export const readFileFn = function readFileFn(a, cy) { return cy.readFile(a);  }
// root
export const reloadFn = function reloadFn(cy) { return cy.reload();  }
// export const requestFn = function requestFn(a, cy) { return cy.request(a);  }
export const rightclickFn = function rightclickFn(cy) { return cy.rightclick();  }
// export const rootFn = function rootFn(cy) { return cy.root();  }
// export const routeFn = function routeFn(a, cy) { return cy.route(a);  }
// both
export const screenshotFn = function screenshotFn(cy) { return cy.screenshot();  }
export const scrollIntoViewFn = function scrollIntoViewFn(a, cy) { return cy.scrollIntoView(a);  }
// export const scrollToFn = function scrollToFn(a, cy) { return cy.scrollTo(a);  }
export const selectFn = function selectFn(values, cy) { return cy.select(values); }
// export const serverFn = function serverFn(a, cy) { return cy.server(a);  }
// root
export const setCookieFn = function setCookieFn(a, b, cy) { return cy.setCookie(a, b);  }

export const should0Fn = function should0Fn(a, b) { return b.should(a); }
export const should1Fn = function should1Fn(a, b, c) { return c.should(a, b); }
export const should2Fn = function should2Fn(a, b, c, d) { return d.should(a, b, c); }

export const siblingsFn = function siblingsFn(a, cy) { return cy.siblings(a);  }
// export const spreadFn = function spreadFn(a, cy) { return cy.spread(a);  }
// export const spyFn = function spyFn(a, cy) { return cy.spy(a);  }
// export const stubFn = function stubFn(a, cy) { return cy.stub(a);  }
// form
export const submitFn = function submitFn(a, cy) { return cy.submit(a);  }
// export const taskFn = function taskFn(a, cy) { return cy.task(a);  }
export const thenFn = function thenFn(f, a) { return a.then(f);  }
// root
export const tickFn = function tickFn(a, cy) { return cy.tick(a);  }
// root
export const titleFn = function titleFn(cy) { return cy.title();  }
export const triggerFn = function triggerFn(a, cy) { return cy.trigger(a);  }
export const typeFn = function typeFn(a, cy) { return cy.type(a);  }
export const uncheckFn = function uncheckFn(a, cy) { return cy.uncheck(a);  }
// root
export const urlFn = function urlFn(cy) { return cy.url();  }
// root
export const viewportFn = function viewportFn(a, b, cy) { return cy.viewport(a, b);  }
// root
export const visitFn = function visitFn(url, cy) { return cy.visit(url); }
// root
export const waitFn = function waitFn(a, cy) { return cy.wait(a);  }
// root
export const windowFn = function windowFn(cy) { return cy.window();  }
export const withinFn = function withinFn(a, cy) { return cy.within(a);  }
export const wrapFn = function wrapFn(a, cy) { return cy.wrap(a);  }
// export const writeFileFn = function writeFileFn(a, cy) { return cy.writeFile(a);  }

export const xpathFn = function xpathFn(isJust, fromJust, s, opts, cy) {
  const options = isJust(opts) ? fromJust(opts) : undefined;
  return cy.xpath(s, opts);
}

export const attachFileFn = function attachFileFn(isJust, fromJust, a, b, opts) {
  const options = isJust(opts) ? fromJust(opts) : undefined;
  return b.attachFile(a, options);
}
