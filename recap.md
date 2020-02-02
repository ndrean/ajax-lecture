# DOM & Events: recap

## How to get one element from the dom

### generic with css selector
```html
<div class="title">Hello</div>
```

```js
document.querySelector('.title');
```

### if we have an id
```html
<div id="footer">Bye</div>
```

```js
const element = document.getElementById('footer');
```

## With one DOM ELEMENT we can:

- append html

```js
element.insertAdjacentHTML('beforebegin | afterbegin | beforeend | afterend', "<div>some html</div>");
```

- get the content inside the element

```html
<div class="title">Hello <strong>world</strong></div>
```

```js
const element = document.querySelector('.title');

// only text
element.innerText;

// with HTML tags
element.innerHTML;
```

- replace the content inside the element

```js
// only text
element.innerText = "Hello!";

// with HTML tags
element.innerHTML = "<p>Holà !</p>"
```

- remove one element (remove not hide)

```js
element.remove();
```

- get the style of one element

```js
element.style.backgroundColor;
// style css in lowerCamelCase
```

- edit the style of one element

```js
element.style.backgroundColor = "#920382";
// style css in lowerCamelCase
```

- add a class to one element

```js
element.classList.add('active');
```

- remove a class to one element

```js
element.classList.remove('active');
```

- toggle a class to one element

```js
element.classList.toggle('active');
```

- get the value of an input

```html
<input id="email" type="email" value="bob@example.com">
```

```js
const email = document.getElementById('email');
email.value
```

- write the value of an input

```js
email.value = 'eve@example.com';
```

- add an event listener

```js
element.addEventListener('click', (event) => {
  // THIS IS A CALL BACK
  // CODE HERE WILL NOT BE EXECUTED UNTIL EVENT OCCURS
})
```

## How to get multiple elements from the dom

```html
<ul>
  <li>Banana</li>
  <li>Apple</li>
  <li>Peach</li>
  <li>Pear</li>
</ul>
```

```js
const fruits = document.querySelectorAll('li'); // => NODE LIST <=> ARRAY
```

## With multiple DOM ELEMENTS (NODE LIST) we can:

```js
fruits.forEach((fruit) => {
  // HERE WE CAN MANIPULATE A DOM ELEMENT (cf. above)
});
```
