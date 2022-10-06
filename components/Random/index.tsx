import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { IMovie } from '../../interface';
import { ComponentCard } from '../common';

interface IProps {
  carousels: Array<IMovie> | undefined;
}

export const ComponentRandom = (props: IProps) => {
  const { carousels } = props;
  const handleDragStart = (e: any) => e.preventDefault();
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const update: JSX.Element[] = [];
    if (carousels) {
      carousels.map((item, index) => {
        update.push(<ComponentCard item={item} key={index} />);
      });
      setItems(update);
      setMounted(true);
    }
  }, [carousels]);

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
          autoPlay={false}
          mouseTracking
          infinite
          items={items}
        />
      )}
    </section>
  );
};
