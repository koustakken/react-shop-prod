import React, { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

  return (
    <div className={styles.root}>
        <p>{count}</p>
        <button onClick={increment}>inc</button>
    </div>
  )
}
