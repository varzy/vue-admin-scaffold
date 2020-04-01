export default class {
  constructor({
    title,
    action,
    globalLoading,
    hideTitleInBrowserTab = false,
    hideInHomeBreadcrumb = false,
    hideHomeBreadcrumb = false,
    disabledInHomeBreadcrumb = false,
    hideProgress = false
  }) {
    this.title = title;
    this.action = action;
    this.globalLoading = globalLoading;
    this.hideTitleInBrowserTab = hideTitleInBrowserTab;
    this.hideInHomeBreadcrumb = hideInHomeBreadcrumb;
    this.hideHomeBreadcrumb = hideHomeBreadcrumb;
    this.disabledInHomeBreadcrumb = disabledInHomeBreadcrumb;
    this.hideProgress = hideProgress;
  }
}
