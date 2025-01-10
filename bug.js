```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran!');
    return () => {
      // Cleanup function: runs before the next effect runs, or when component unmounts
      console.log('Cleanup function ran!');
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```