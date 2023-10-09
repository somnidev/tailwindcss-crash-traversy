# Tailwind CSS Crash Course

Based upon [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME) By Brad Traversy

## What is Tailwind?

Tailwind CSS is a utility-first CSS (Cascading Style Sheets) framework with predefined classes that you can use to build and design web pages directly in your markup. It lets you write CSS in your HTML in the form of predefined classes.

There is a good introduction to Tailwind at [How to Use Tailwind CSS to Rapidly Develop Snazzy Websites](https://kinsta.com/blog/tailwind-css/).

## Installation Instructions

The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

```bash
npm init
```

### Install Tailwind CSS

Install tailwindcss via npm, and create your tailwind.config.js file.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file. Remember to include your HTML entry point if applicable - see [Pattern recommendations](https://tailwindcss.com/docs/content-configuration#pattern-recommendations).

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './dist/index.html',
        "./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file. 

This is why we create a folder `src` and  a file called `style.css`` and paste that and then save.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start the Tailwind CLI build process

Now we run the CLI tool to scan your template files for classes and build your CSS.

```bash
npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
```

## Create Tailwind Components

### Create a Button

Now let's create a component. We'll create a simple button, so in our HTML
here let's go ahead and add a button tag and just going to use Emmet to add some classes here so for the color will do another blue but different shade let's do 500 and I want to add a color for the
text so we can use text - and then a color I'm going to use white if we want to make it bold we can use font and bold.

```html
button.bg-sky-200.text-white.font-bold.py-2.px-4.my-5.rounded
```

This is the resulting html.

```html
    <button class="bg-sky-500 text-white font-bold py-2 px-4 my-5 rounded">Find Friends</button>
```

we have our button and notice there's no BTN class or anything like that like you would find in traditional frameworks. It's me it's all made up of these low-level utility classes and what's really cool is, if we want a hover effect, we don't have to add any extra CSS or anything we can simply add a `hover: and then whatever we want for the color.

```html
<button class="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 my-5 rounded">Find Friends</button>
```

### Adding a Container

I'm gonna add a container there is a container class like there is and just about every framework and let's move the button into the container div
here and if I save this and I go back notice that it's not pushed over by default like it is in most frameworks.

```html
<div class="container">
    <button class="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 my-5 rounded">Find Friends</button>
</div>
```

If we want this to be margin auto and maybe add some padding we could add utility classes so we could add some Utility Classes like `mx-auto` which is margin on the x axis auto and for padding we could do `px-2`. 

```html
<div class="container mx-auto px-2">
    <button class="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded">Find Friends</button>
</div>
```

### Tailwind Config File

By default, Tailwind will look for an optional `tailwind.config.js` file at the root of your project where you can define any customizations - see [Tailwind Docs - Configuration](https://tailwindcss.com/docs/configuration).

For example you can add some colors, or change the fonts, or anything you want.

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
```

What we are going to do is, that we delete the `mx-auto px-2` and replace it with the following lines in our tailwind config.

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './dist/index.html',
        "./src/**/*.{html,js}"],
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
    plugins: [],
  }
```

And as we can see, nothing changes.

### Tailwind apply directive

You can extend you can extend these utility classes within CSS if you want.

If you want a button with you know traditional classes like `btn btn-blue`. We can add this in our `style.css` and use a directive `@apply``.

```json
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
    @apply font-bold py-2 px-4 rounded
}
.btn-blue {
    @apply bg-sky-500 text-white
}
.btn-blue:hover {
    @apply hover:bg-sky-400  
}
```

Now we can use these classes in our html.

```html
 <button class="btn btn-blue">Find Groups</button>
```

### Alert Component

Let's build an alert component so we're gonna have a div.

```html
<!-- ALERT COMPONENT -->
<!-- ALERT COMPONENT -->
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5" role="alert">
    <strong class="font-bold">Alert!</strong>
    <span class="block sm:inline">Please update your password</span>
</div>
```

#### Responsive Design

In order to get a [Responsive Design](https://tailwindcss.com/docs/responsive-design), we can use _utility variants to build adaptive user interfaces_.

[Tailwind boilerplate](https://github.com/abrahamebij/tailwind-boilerplate). There are five breakpoints by default, inspired by common device resolutions: sm, md, lg, xl, 2xl. This works for every utility class in the framework, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.

>_**Note**:_ Utility Variants are based upon _Media Queries_.

The _Breakpoint Prefix_ `sm` corresponds to the Media Query `@media (min-width: 640px) { ... }`.

>_**Media queries**_ is a feature of CSS 3 allowing content rendering to adapt to different conditions such as screen resolution (e.g. mobile and desktop screen size). It became a W3C recommended standard in June 2012,[1] and is a cornerstone technology of responsive web design (RWD).

### Card Component

Let's create a little card component so I'm gonna actually create inside my dist folder an image folder ìmg`because I'm gonna have my logo inside it.

```html
.max-w-sm.mx-auto.flex.p-6.bg-white.rounded-lg.shadow-xl
```

I'm going to use max width small and let's move it to the middle so margin x auto and I'm actually gonna use flex here. 
I'm going to make this a flex box and let's do padding all around p6 and let's make the background white.
Let's make it rounded and we can do rounded and then we can even use a box shadow class.

```html
<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
</div>
```

##### Don't shrink `flex-shrink-0`

So let's add some content inside of here now and I don't want the any of the content to shrink so we can actually use a flex - shrink - zero class here, which is the same as `shrink-0`.

And now let's add another div with some text an add some classes to h4 we're gonna do text - and you have a text component 3xl, since by default all the headings don't even have any kind of font size it's just a regular font size.

```html
<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
    <div class="flex-shrink-0">
        <img src="img/logo-only.png" alt="" class="h-12 w-12">
    </div>
    <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900">Traversy Media</h4>
        <p class="text-base text-gray-600">You have a new message!</p>
    </div>
</div>
```

### Card-Columns

Now let's say that we want some card columns, so basically I just want to
have a flexbox that has two cards within it with two images.

```html

```


```html
```

```html
```
