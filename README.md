# React Logux

<img align="right" width="95" height="95" title="Logux logo"
     src="https://cdn.rawgit.com/logux/logux/master/logo.svg">

React container to subscribe Logux on component mount.

Use it with [React Redux] and [Logux Redux].
See also [Logux Status] for UX best practices.

[Logux Status]: https://github.com/logux/logux-status
[React Redux]: https://github.com/reactjs/react-redux
[Logux Redux]: https://github.com/logux/logux-redux

<a href="https://evilmartians.com/?utm_source=react-logux">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Install

```sh
npm install --save react-logux
```

## Usage

First, you need to create Logux client by [Logux Redux], wrap your
application into `<Provider>` from [React Redux]
and start Logux Redux connection.

With React Logux you can wrap your components in `subscribe` decorator.
As result, when they will automatically subscribe to data on mount
and unsubscribe on unmount.

`subscribe` accepts component properties as first argument.
You can use this properties to define subscription parameters.

```js
const subscribe = require('react-logux/subscribe')

class User extends React.Component {
  …
}

module.exports = subscribe(({ id }) => {
  return { name: `users/${ id }`, fields: ['name', 'photo'] }
})(User)
```

In this example, `<User id="10">` will send
`{ type: 'logux/subscribe', name: 'users/10', fields: ['name', 'photo'] }`
action to server.

If you need to define only `name` parameters, you can use shortcut:

```js
module.exports = subscribe(({ id }) => `users/${ id }`)(User)
```

With [`babel-plugin-transform-decorators-legacy`] you can use `subscribe`
in decorator syntax:

```js
@subscribe(({ id }) => `users/${ id }`)
class User extends React.Component {
  …
}
```

[`babel-plugin-transform-decorators-legacy`]: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy
