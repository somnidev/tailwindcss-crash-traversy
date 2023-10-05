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



[Tailwind boilerplate](https://github.com/abrahamebij/tailwind-boilerplate)