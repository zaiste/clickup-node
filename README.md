# Node Client for ClickUp API

## Install

```
npm install clickup
```

## Usage

```js
const ClickUp = require('clickup');

const client = new ClickUp('<YOUR TOKEN GOES HERE>')

const main = async () => {
  let r = await client.me();
  console.log(r);

  r = await client.newTask('<YOUR LIST ID GOES HERE>', {
    name: 'Test',
    content: 'Test'
  });
  console.log(r);
}

main()
```