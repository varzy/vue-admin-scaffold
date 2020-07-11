export default class IBreadcrumbItem {
  constructor({ route, title = '未命名', enabled = true }) {
    this.route = route;
    this.title = title;
    this.enabled = enabled;
  }
}
