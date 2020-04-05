!(function(v) {
  var t,
    h =
      '<svg><symbol id="iconfont-qrcode" viewBox="0 0 1024 1024"><path d="M85.312 85.312V384H384V85.312H85.312zM0 0h469.248v469.248H0V0z m170.624 170.624h128v128h-128v-128zM0 554.624h469.248v469.248H0V554.624z m85.312 85.312v298.624H384V639.936H85.312z m85.312 85.312h128v128h-128v-128zM554.624 0h469.248v469.248H554.624V0z m85.312 85.312V384h298.624V85.312H639.936z m383.936 682.56H1024v85.376h-298.752V639.936H639.936V1023.872H554.624V554.624h255.936v213.248h128V554.624h85.312v213.248z m-298.624-597.248h128v128h-128v-128z m298.624 853.248h-85.312v-85.312h85.312v85.312z m-213.312 0h-85.312v-85.312h85.312v85.312z" fill="#262626" ></path></symbol><symbol id="iconfont-cut" viewBox="0 0 1024 1024"><path d="M213.312 810.688h597.376V213.312H213.312v597.376z m0 85.312v128H128v-128H0v-85.312h128V128h682.688V0H896v128h128v85.312h-128V896H213.312z" fill="#262626" ></path></symbol><symbol id="iconfont-chart-area" viewBox="0 0 1024 1024"><path d="M85.504 938.688H1024V1024H0v-85.312h0.192V0h85.312v938.688zM128 723.328l212.736-271.552 303.424 155.52L990.912 256v632.64H128v-165.312z" fill="#262626" ></path></symbol><symbol id="iconfont-chart-line" viewBox="0 0 1024 1024"><path d="M85.504 938.688H1024V1024H0v-85.312h0.192V0h85.312v938.688z m120.256-169.984l-70.208-48.512L372.48 377.728l303.424 155.52 265.472-345.92 67.712 51.968-308.8 402.304-300.16-153.856-194.368 280.96z" fill="#262626" ></path></symbol><symbol id="iconfont-chart-bar" viewBox="0 0 1024 1024"><path d="M85.312 938.688H1024V1024H0V0h85.312v938.688zM256 341.312h85.312V768H256V341.312zM512 128h85.312v640H512V128z m256 213.312h85.312V768H768V341.312z" fill="#262626" ></path></symbol><symbol id="iconfont-nail" viewBox="0 0 1024 1024"><path d="M448 704.064H128V576.128L320 496.64l47.488-368.32H256v-128h128V0h256v0.32h128v128h-111.488L704 496.512l192 79.552v128H576V1024H448v-319.936z" fill="#262626" ></path></symbol><symbol id="iconfont-nail-fixed" viewBox="0 0 1024 1024"><path d="M334.72 612.16L127.36 404.736l85.12-85.184L390.016 391.04l275.968-214.4-72.32-72.32L678.912 19.2l82.944 82.88 0.192-0.128L928 267.84l-0.192 0.256 82.944 82.944-85.12 85.184-72.32-72.256L638.848 640l71.488 177.408-85.12 85.184-207.488-207.36-255.36 255.296-82.944-82.944 255.36-255.36z" fill="#262626" ></path></symbol></svg>',
    e = (t = document.getElementsByTagName('script'))[t.length - 1].getAttribute('data-injectcss');
  if (e && !v.__iconfont__svg__cssinject__) {
    v.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  !(function(t) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) setTimeout(t, 0);
      else {
        var e = function() {
          document.removeEventListener('DOMContentLoaded', e, !1), t();
        };
        document.addEventListener('DOMContentLoaded', e, !1);
      }
    else
      document.attachEvent &&
        ((n = t),
        (i = v.document),
        (l = !1),
        (h = function() {
          try {
            i.documentElement.doScroll('left');
          } catch (t) {
            return void setTimeout(h, 50);
          }
          o();
        })(),
        (i.onreadystatechange = function() {
          'complete' == i.readyState && ((i.onreadystatechange = null), o());
        }));
    function o() {
      l || ((l = !0), n());
    }
    var n, i, l, h;
  })(function() {
    var t, e, o, n, i, l;
    ((t = document.createElement('div')).innerHTML = h),
      (h = null),
      (e = t.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (o = e),
        (n = document.body).firstChild
          ? ((i = o), (l = n.firstChild).parentNode.insertBefore(i, l))
          : n.appendChild(o));
  });
})(window);
