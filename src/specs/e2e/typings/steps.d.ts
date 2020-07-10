/// <reference types='codeceptjs' />
type about = typeof import('./src/specs/e2e/pages/about.page');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, about: about }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: about }
  interface Methods extends CodeceptJS.Puppeteer, RandomGeneratorHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
