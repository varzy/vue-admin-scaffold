export default class {
  constructor({
    title,
    icon,
    hideBreadcrumb = false,
    disabledInBreadcrumb = false,
    hideTitleInBrowserTab = false
  }) {
    this.title = title;
    this.icon = icon;
    this.hideBreadcrumb = hideBreadcrumb;
    this.disabledInBreadcrumb = disabledInBreadcrumb;
    this.hideTitleInBrowserTab = hideTitleInBrowserTab;
  }
}
