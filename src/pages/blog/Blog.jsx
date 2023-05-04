import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="bg-blue-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Uncontrolled vs Controlled Components</h2>
        <p>
          Uncontrolled components are like wild teenagers - they do their own thing! They manage their own state
          internally, using refs for input forms. Controlled components, on the other hand, are well-behaved. Their
          state is managed by a parent component and they receive updates through props.
        </p>
      </div>

      <div className="bg-yellow-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Validating Props with PropTypes</h2>
        <p>
          PropTypes are like a bouncer at a club, making sure only the right types get in. They help you check that the
          props your component receives are of the expected type. You just need to import PropTypes and define the
          propTypes object for your component. For example, if you have a 'name' prop that should be a string, you'll
          do: MyComponent.propTypes = name: PropTypes.string.
        </p>
      </div>

      <div className="bg-green-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Node.js vs Express.js</h2>
        <p>
          Node.js is the cool platform that lets you run JavaScript outside the browser. Express.js, on the other hand,
          is a framework built on top of Node.js. It's like Node.js is the cake, and Express.js is the icing and
          sprinkles, making it easier and more delicious to build web applications.
        </p>
      </div>

      <div className="bg-purple-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Custom Hooks</h2>
        <p>
          Custom hooks are like reusable recipes for your favorite dish. They let you extract and share logic between
          components. If you find yourself using similar stateful logic in multiple places, you can create a custom hook
          to keep things DRY (Don't Repeat Yourself). You can recognize them by the `use` prefix, like `useForm` or
          `useCounter`.
        </p>
      </div>
    </div>
  );
};

export default Blog;
