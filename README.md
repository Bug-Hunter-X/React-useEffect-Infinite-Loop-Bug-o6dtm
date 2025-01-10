# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook and its dependency array.  The incorrect usage of the dependency array leads to an infinite rendering loop.

## Bug Description
The `useEffect` hook is used to perform side effects after rendering.  However, if the dependency array is missing or incorrect, the effect might run unexpectedly, leading to infinite loops or unexpected behavior.

## Solution
The correct usage of the dependency array is crucial to prevent such issues.  Ensure you include all relevant variables or state values that affect the effect's behavior.