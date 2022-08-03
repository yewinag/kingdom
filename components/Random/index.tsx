import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { data } from '../../constants';
import { IMovies } from '../../interface';
import { ComponentCard } from '../common';

export const ComponentRandom = () => {
  const handleDragStart = (e: any) => e.preventDefault();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const update: JSX.Element[] = [];
    data.map(item => {
      update.push(<ComponentCard item={item} />);
    });
    setItems(update);
    setMounted(true);
  }, [data]);

  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 8 }
  };

  return (
    <section className="random-layout">
      <h4>Random Content</h4>
      {mounted && (
        <AliceCarousel
          responsive={responsive}
          autoPlay
          mouseTracking
          infinite
          items={items}
        />
      )}
    </section>
  );
};
