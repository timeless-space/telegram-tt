import type { FC } from '../../lib/teact/teact';
import React from '../../lib/teact/teact';

import buildClassName from '../../util/buildClassName';

import './Spinner.scss';

const Spinner: FC<{
  color?: 'blue' | 'white' | 'black' | 'green' | 'gray' | 'yellow';
  backgroundColor?: 'light' | 'dark';
  className?: string;
}> = ({
  color = 'gray',
  backgroundColor,
  className,
}) => {
  return (
    /**
      * TL - Decrease spinner size
      * Description: Add custom-medium className to decrease spinner size by 75% with custom-medium className.
      */
    <div className={buildClassName(
      // eslint-disable-next-line max-len
      'Spinner custom-medium', className, color, backgroundColor && 'with-background', backgroundColor && `bg-${backgroundColor}`,
    )}
    >
      <div className="Spinner__inner" />
    </div>
  );
};

export default Spinner;
