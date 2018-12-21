(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      /* eslint no-return-assign: 0 */
      return root.bjorklund = factory();
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.bjorklund = factory();
  }
}(this, function () {

  var
    floor = Math.floor;

  function euclid(a, b, qs, rs, l) {

    l = l || 0;

    var
      q = floor(a / b),
      r = a % b;

    qs.push(q);
    rs.push(r);

    return r ? euclid(b, r, qs, rs, l + 1) : l;
  }

  function build(qs, rs, l, g0, g1, gs) {

    var
      j, q, r;

    switch (l) {
      case -1:
        gs.push(g0);
        break;
      case -2:
        gs.push(g1);
        break;
      default:
        q = qs[l];
        r = rs[l];

        for (j = 0; j < q; j++) {
          build(qs, rs, l - 1, g0, g1, gs);
        }
        if (r !== 0) {
          build(qs, rs, l - 2, g0, g1, gs);
        }
    }
  }

  function interlace (a, b) {
    // interlace values in a
    return a.reduce(
      function(interlaced, x, i) {
        return interlaced.concat([x, b[i]]);
      },
      []
    ).concat(
      // then remaining items in b
      b.slice(a.length)
    );
  }

  function bjorklund(n, k) {

    var
      m = n - k,

      qs = [],
      rs = [ k ],
      gs = [],

      l;

    if (m !== 0) {
      if (n % k !== 0) {
        if (m > k) {
          l = euclid(m, k, qs, rs);
          build(qs, rs, l, 0, 1, gs);
        } else {
          l = euclid(k, m, qs, rs);
          build(qs, rs, l, 1, 0, gs);
        }
      } else {
        return interlace(Array(k).fill(1), Array(n - k).fill(0));
      }
    } else {
      return Array(n).fill(1);
    }

    return gs;
  }

  return bjorklund;
}));
