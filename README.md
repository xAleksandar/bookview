# Bookview

Contains simple page that scrolls over 1000 records of books. It renders only the components that are visible on the viewport,

## Setup steps

In a local environment, copy/paste the following commands:

```
git clone https://github.com/xAleksandar/bookview && cd bookview
yarn
yarn dev
```

## Solution comments

Rendering of the viewport only instead of the whole list is achieved using `react-window` library.

View responsiveness is achieved using media queries (CSS).

Typescript model of the book can be found under `src/types/bookType.ts`.
