"use client";
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import BookComponent from '@/components/BookComponent';
import useFetchResults from '@/hooks/useFetchResults';
import React from 'react';

import styles from "../styles/page.module.css";


function App() {

  const { results } = useFetchResults();

  const Row: React.FC<ListChildComponentProps> = ({ index, style }) => (
    <div style={style} className={styles.Post}>
      <BookComponent 
        name={results[index]["Name"]} 
        author={results[index]["Author"]} 
        description={results[index]["Description"]}
        imageLink="https://cdn.xxl.thumbs.canstockphoto.com/book-logo-college-student-illustration-vector-clip-art_csp83290011.jpg"
      />
    </div>
  );

  return (
    <List className={styles.List} width={1400} height={700} itemCount={results.length} itemSize={120}>
      {Row}
    </List>
  );
}

export default App;

