/// <reference types='codeceptjs' />
type about = typeof import('pages/about.page');
type home = typeof import('pages/home.page');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, about: about, home: home }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: about; [2]: home }
  interface Methods extends CodeceptJS.Puppeteer, RandomGeneratorHelper, CodeceptJS.REST {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
