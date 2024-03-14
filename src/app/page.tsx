
import React from 'react';
import styles from "./page.module.css"
import CardSelection from './components/card';

const Home: React.FC = () => {
  return (
   <div className={styles.bgImg}>
    <div style={{maxWidth: "300px",padding: "30px 20px", margin: "0 auto" , background: "#FFFFFF82", border: "2px solid #fff", borderRadius: "20px"}}>
      <CardSelection />
      </div>
    </div>
  );
};

export default Home;


// hello
