export default class {
  constructor({
    title,
    action,
    hideTitleInBrowserTab = false,
    hideInBreadcrumb = false,
    hideHomeBreadcrumb = false,
    disabledInBreadcrumb = false,
    hideProgress = false
  }) {
    this.title = title;
    this.action = action;
    this.hideTitleInBrowserTab = hideTitleInBrowserTab;
    this.hideInBreadcrumb = hideInBreadcrumb;
    this.hideHomeBreadcrumb = hideHomeBreadcrumb;
    this.disabledInBreadcrumb = disabledInBreadcrumb;
    this.hideProgress = hideProgress;
  }
}
