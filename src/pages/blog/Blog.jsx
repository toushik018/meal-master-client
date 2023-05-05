import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
  BlobProvider,
} from '@react-pdf/renderer';



const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
});


const Blog = () => {
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleDownload = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    setPdfBlob(blob);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'my_blog.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Uncontrolled vs Controlled Components
          </Text>
          <Text>
            Uncontrolled components are like wild teenagers - they do their own thing! They manage their own state
            internally, using refs for input forms. Controlled components, on the other hand, are well-behaved. Their
            state is managed by a parent component and they receive updates through props.
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Validating Props with PropTypes
          </Text>
          <Text>
            PropTypes are like a bouncer at a club, making sure only the right types get in. They help you check that the
            props your component receives are of the expected type. You just need to import PropTypes and define the
            propTypes object for your component. For example, if you have a 'name' prop that should be a string, you'll
            do: MyComponent.propTypes = name: PropTypes.string.
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Node.js vs Express.js
          </Text>
          <Text>
            Node.js is the cool platform that lets you run JavaScript outside the browser. Express.js, on the other hand,
            is a framework built on top of Node.js. It's like Node.js is the cake, and Express.js is the icing and
            sprinkles, making it easier and more delicious to build web applications.
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
            Custom Hooks
          </Text>
          <Text>
            Custom hooks are like reusable recipes for your favorite dish. They let you extract and share logic between
            components. If you find yourself using similar stateful logic in multiple places, you can create a custom hook
            to keep things DRY (Don't Repeat Yourself). You can recognize them by the `use` prefix, like `useForm` or
            `useCounter`.
          </Text>
        </View>

      </Page>
    </Document>
  );


  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex justify-between items-center mb-8 mt-10">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FaDownload className="mr-2" />
          <span>Download PDF</span>
        </button>
      </div>

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
