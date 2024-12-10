```javascript
// Example of an issue with Tailwind's `@apply` directive when using it with a custom directive.
.my-custom-directive {
  @apply text-blue-500;
}

//This will result in an error because `text-blue-500` is not defined in the project's tailwind.config.js file.
```