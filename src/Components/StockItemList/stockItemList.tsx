import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockItems } from '../../Slice/stockSlice';
import { AppDispatch, RootState } from '../../Store/store';

const StockItemsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.stock.items);
  const status = useSelector((state: RootState) => state.stock.status);
  const error = useSelector((state: RootState) => state.stock.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStockItems());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <img src={item.imageUrl} alt={item.name} />
          </li>
        ))}
      </ul>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Stock Items</h2>
      {content}
    </section>
  );
};

export default StockItemsList;
