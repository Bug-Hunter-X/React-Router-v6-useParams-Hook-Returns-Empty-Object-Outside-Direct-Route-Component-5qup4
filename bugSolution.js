The solution involves restructuring the component tree to ensure that `useParams` is used within the direct child of the route.  Here's the corrected version:

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
  console.log(userId); // Now correctly logs the userId
  return (
    <div>
      <h1>User Detail Page</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
```

In this corrected example, `UserDetailPage` is directly within the `<Route>` component that defines the `:userId` parameter.  This ensures that `useParams` functions correctly and returns the expected parameter values.