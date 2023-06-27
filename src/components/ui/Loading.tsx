import type { FC } from '../../lib/teact/teact';
import React, { memo } from '../../lib/teact/teact';

import Spinner from './Spinner';
import buildClassName from '../../util/buildClassName';

import './Loading.scss';

type OwnProps = {
  /**
    * TL - Customize Loading Component
    * Description: Add className property for custom style easier.
    */
  color?: 'blue' | 'white' | 'black' | 'yellow' | 'gray';
  backgroundColor?: 'light' | 'dark';
  onClick?: NoneToVoidFunction;
  className?: string;
};

const Loading: FC<OwnProps> = ({
  color, backgroundColor, onClick, className,
}) => {
  return (
    <div className={buildClassName('Loading', onClick && 'interactive', className)} onClick={onClick}>
      <Spinner color={color} backgroundColor={backgroundColor} />
    </div>
  );
};

export default memo(Loading);
