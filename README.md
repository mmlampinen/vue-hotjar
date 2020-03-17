# vue-hotjar
[Hotjar](https://www.hotjar.com/) plugin for Vue.js

## How to use

Copy either the ts or js file into your plugin directory.
Then in your `main.[jt]s` add the following :
```
import VueHotjar from './plugins/hotjar';

Vue.use(VueHotjar, { 
  id: '1234567',
  sv: '6' // optional, defaults to 6
});
```
