import React from 'react';
import Loader from '@habi/habi-react-components/dist/Loader/loader';
import { LoaderContainerWrapper } from './styles';

const LoaderContainer = () => {
  return (
    <LoaderContainerWrapper>
      <Loader />
    </LoaderContainerWrapper>
  );
};
export { LoaderContainer };
