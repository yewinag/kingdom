import { StyledHeading } from '@styles';
import { StyledCarousel } from '@styles';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import { IMovie } from '../../interface';
import { ComponentCard } from '../common';
interface IProps {
  carousels: Array<IMovie> | undefined;
}

export const ComponentRandom = (props: IProps) => {
  const { carousels } = props;
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const update: JSX.Element[] = [];
    if (carousels) {
      carousels.map((item, index) => {
        update.push(<ComponentCard item={item} key={index} small={true} />);
      });
      setItems(update);
      setMounted(true);
    }
  }, [carousels]);

  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 8 }
  };

  return (
    // <section className="random-layout">
    <StyledCarousel>
      <StyledHeading>Random Content</StyledHeading>
      {mounted && (
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          animationDuration={1000}
          mouseTracking
          infinite
          items={items}
        />
      )}
    </StyledCarousel>
    // </section>
  );
};
