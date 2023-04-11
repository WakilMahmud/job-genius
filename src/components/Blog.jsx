import React from "react";

const Blog = () => {
	return (
		<div className="max-w-7xl mx-auto font-manrope my-32 px-4">
			<div className="p-8 border rounded-lg bg-slate-100 mb-8">
				<h1 className="font-bold text-xl md:text-2xl mb-6">1. When should you use context API?</h1>
				<p className="font-normal text-gray-500 text-justify">
					The Context API in React is a feature that allows you to share data between components without having to pass props down manually at every
					level. It can be used for scenarios such as authentication, managing state. The Context API is most appropriate when you have data that
					needs to be shared between multiple components and the data does not change frequently. If the data is changing frequently, it may be more
					appropriate to use a more advanced state management library such as Redux.
				</p>
			</div>
			<div className="p-8 border rounded-lg bg-slate-100 mb-8">
				<h1 className="font-bold text-xl md:text-2xl mb-6">2. What is a custom hook?</h1>
				<p className="font-normal text-gray-500 text-justify">
					A custom hook in React is a JavaScript function that starts with the prefix use and allows you to encapsulate and reuse complex stateful
					logic across multiple components. Custom hooks provide a way to extract logic and stateful functionality from a component, making it easier
					to reuse code and keep components simple and focused. Custom hooks can be used just like any other React hook, and they can be created to
					perform a variety of tasks such as fetching data from an API, handling form inputs, or managing local storage.
				</p>
			</div>
			<div className="p-8 border rounded-lg bg-slate-100 mb-8">
				<h1 className="font-bold text-xl md:text-2xl mb-6">3. What is useRef?</h1>
				<p className="font-normal text-gray-500 text-justify">
					useRef is a hook in React that allows you to create a mutable reference to a DOM element or a value that persists across component
					re-renders. It can be used to access the properties and methods of a DOM element or to store data that doesn't need to trigger a component
					re-render. The useRef hook can be used in two ways: to get a reference to a DOM element or to store a value that persists across component
					re-renders.
				</p>
			</div>
			<div className="p-8 border rounded-lg bg-slate-100 mb-8">
				<h1 className="font-bold text-xl md:text-2xl mb-6">4. What is useMemo?</h1>
				<p className="font-normal text-gray-500 text-justify">
					useMemo is a hook in React that allows you to memoize the result of a function, caching the value returned by the function and returning it
					on subsequent calls if the inputs have not changed. This can help to improve the performance of your React components by avoiding
					unnecessary re-computation of expensive operations or rendering of components. useMemo takes a function as its first argument and an array
					of dependencies as its second argument, and it returns a memoized value. If the dependencies have not changed since the last render, the
					cached value will be returned instead of re-computing the value.
				</p>
			</div>
		</div>
	);
};

export default Blog;
