import { PATH_SEARCH } from '@constants';
import { useRouter } from 'next/router';
import React, { KeyboardEvent, useState } from 'react';
import styled from 'styled-components';

export const ComponentSearchInput = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const pressKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push(`${PATH_SEARCH}${value}`);
    }
  };
  return (
    <StyledSearchInput>
      <input
        placeholder="Search Movies Name"
        onChange={onChange}
        onKeyUp={pressKey}
      />
    </StyledSearchInput>
  );
};

const StyledSearchInput = styled.div`
  margin-top: ${p => p.theme.space['10']};
  height: ${p => p.theme.heights.input};
  input {
    width: 100%;
    padding: ${p => p.theme.space['10']};
    border-radius: ${p => p.theme.borderRadius.base};
    border: 0.5px solid ${p => p.theme.text_500};
    &:focus-visible {
      outline: transparent;
    }
  }
`;
