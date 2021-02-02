//modules
import React, { useState, useEffect } from 'react';
//components
import { Loader } from './Loader';
import { ItemCard } from './ItemCard';

//コンポーネントを追加する際はコメント部分に変更を加える
//modify component name
export const Earth = () => {
  const [data, setData] = useState([]);

  //modify path
  const getData = async () => {
    return await fetch('/api/earth').then((response) => response.json());
  };

  useEffect(() => {
    getData().then((response) => setData(response));
  }, []);

  //modify section name
  if (!data?.length) {
    return <Loader />;
  }
  return (
    <>
      <div className="inner">
        <h2 className="section">earth music & ecology</h2>
        <div className="container">
          {data?.map((data) => (
            <ItemCard
              key={data.src}
              title={data.title}
              link={data.link}
              img={data.img}
              target="_blank"
              price={data.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
