# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The problem arises when attempting to access route parameters from a component that isn't directly nested within the route defining those parameters.  The solution involves restructuring the component hierarchy to ensure the `useParams` hook is used within the correct context.

## Problem

The `useParams` hook in React Router v6 returns an empty object if used in a component that is not directly rendered as part of a matching route.  Even if the URL has the expected parameters, they won't be accessible.

## Solution

Ensure that the component utilizing the `useParams` hook is directly nested within the route that defines the parameters.  This means it should be the element rendered within the `element` prop of the `<Route>` component.