# VUE-ADMIN-SCAFFOLD

A backstage management system scaffold based on Vue with some "best practices".

## Documentation

[Full Documentation](https://varzy.me/vue-admin-scaffold-book/)

## FAQ

**Q: Why was it born**

When I built up a new backstage management system, I always had to paste various configurations from the notes, or copy the public part from the previous project. It's annoying to stick too much of them.So I hope to build such an "all-in-one" project, which could be as large as possible to take into accounts the various needs generated in the backstage management system.

**Q: What is the difference with other backstage management system scaffold?**

To be precise, it is not intended to create a "out of the box" management system, but a collection of highlights I found in the process of building a backstage management system. Most of the functions in it have not been rigorously tested, and may just be "best practices in my opinion". The old code could be replaced at any time when I found a better solution.

In summary, I can not guarantee the stability of this project at all.

In addition, even it is a very formulaic backstage system, there will be a drastic difference when corresponded to various needs. So I always don't like to use ready-made templates to revise directly.

**Q: How to use?**

It is strongly not recommended that you clone the project and change it directly. If you're interested in certain features, just take the code you need.

## Roadmap

- Basic Building
  - [x] Code Formatter
  - [x] Global scss variables and scss mixins
  - [x] Scss combination
  - [x] Folders combination
- Router & Layout
  - [x] The component lazy loader: importer.js
  - [x] Unlimited levels of navigation bar based on routing configuration
  - [x] The basic layout component: Home.vue
  - [x] Page transitions effect & NProgress
  - [x] Automatically maintained breadcrumb navigation bar according by routing configuration
  - [x] Automatically update the browser's tab title based on the routing configuration
  - [ ] The expansion and contraction effect of sidebar
  - [ ] Drag to change the width of the sidebar
  - [x] Automatic jump to 404 page
  - [ ] Multi-tab effect
- Permission
  - [x] Login interception
  - [ ] (RBAC) Generate different navigation bar menus based on user's role
  - [ ] (RBAC) Reveal page elements based on user's role
- Tools
  - [x] Echarts configuration generator: ChartOptionsGenerator.js
  - [x] i18n
  - [x] Http module based on Axios
  - [x] Storage module encapsulating localStorage and sessionStorage
  - [x] Ali's Iconfont icons
  - [x] Using local svg icons
  - [ ] Form validation of ElementUI
- Emphasis & Difficulty
  - [ ] CRUD and Pagination effects of table style
  - [ ] Right-click menu
  - [ ] Mouse drag api
- Others
  - [ ] Typescript support
  - [ ] The Mocking of Api
  - [ ] Project's documentation

## License

[MIT](https://opensource.org/licenses/MIT)
