/// <reference types='codeceptjs' />
type about = typeof import('pages/about.page');
type home = typeof import('pages/home.page');
type reqresApi = typeof import('pages/reqresApi.api');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, about: about, home: home, reqresApi: reqresApi }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: about; [2]: home; [3]: reqresApi }
  interface Methods extends RandomGeneratorHelper, CodeceptJS.REST, CodeceptJS.Puppeteer {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
