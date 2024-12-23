In React Router Dom v6, a common issue arises when using the `useParams` hook within a component that's not directly nested within a route that defines the parameters.  This leads to an empty object being returned by `useParams`, even though the URL path contains the expected parameters.  For example, consider this setup:

```jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function UserDetailPage() {
  const { userId } = useParams();
  console.log(userId); // This might unexpectedly log an empty string or undefined
  return <div>User Detail Page</div>;
}
```

The `useParams` hook only works correctly if it's located within a component that's directly rendered as a result of a matching route.  If the `UserDetailPage` component is nested further down a component tree and not directly within the `<Route>` element, this error arises.