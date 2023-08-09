import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Block from '../components/block';
import Footer from '../components/footer';
import { all } from '../services/data.service';

const Blocks = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const temp = [...all['apps'], ...all['blocks']];
    setItems(temp);
  }, []);

  return (
    <div className="relative width height" id="appsbody">
      <Navbar />

      <div className="relative width">
        {items?.map((info) => {
          return (
            <div key={info.id} className="relative width">
              <Block key={info.id} scroll="body" info={info}></Block>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Blocks;
