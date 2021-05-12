### Usage
Here is example using pnpm instead of npm. Should be similar for npm too.
```txt
pnpm install
pnpm run test
```

### Brief
Esprima release is in umd format.

Import it but without actually calling.

However, bundle include esprima.


### Expected Behavior
```txt
$ rollup -c rollup.config.js|grep -C 2 esprima && echo ERR || echo OK

./a.js → stdout...
OK

```

### Actual Behavior
```txt
$ rollup -c rollup.config.js|grep -C 2 esprima && echo ERR || echo OK

./a.js → stdout...
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var esprima = {exports: {}};

(function (module, exports) {
--
/******/ ])
});
}(esprima));

const foo = 'bar';
ERR
```
