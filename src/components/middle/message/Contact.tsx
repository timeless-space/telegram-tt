import type { FC } from '../../../lib/teact/teact';
import React, { useCallback, useEffect } from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { ApiUser, ApiContact, ApiCountryCode } from '../../../api/types';

import { selectUser } from '../../../global/selectors';
import { formatPhoneNumberWithCode } from '../../../util/phoneNumber';
import buildClassName from '../../../util/buildClassName';

import Avatar from '../../common/Avatar';

import './Contact.scss';

type OwnProps = {
  contact: ApiContact;
};

type StateProps = {
  user?: ApiUser;
  phoneCodeList: ApiCountryCode[];
};

const UNREGISTERED_CONTACT_ID = '0';

const Contact: FC<OwnProps & StateProps> = ({
  contact, user, phoneCodeList,
}) => {
  const { openChat } = getActions();

  const {
    firstName,
    lastName,
    phoneNumber,
    userId,
  } = contact;
  const isRegistered = userId !== UNREGISTERED_CONTACT_ID;

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('tl_navigation_contactScreen');
    (window as any).webkit?.messageHandlers.jsHandler.postMessage('tl_navigation_contactScreen');
  }, []);

  const handleClick = useCallback(() => {
    openChat({ id: userId });
  }, [openChat, userId]);

  return (
    <div
      className={buildClassName('Contact', isRegistered && 'interactive')}
      onClick={isRegistered ? handleClick : undefined}
    >
      <Avatar
        size="large"
        user={user}
        text={firstName || lastName}
      />
      <div className="contact-info">
        <div className="contact-name">{firstName} {lastName}</div>
        <div className="contact-phone">{formatPhoneNumberWithCode(phoneCodeList, phoneNumber)}</div>
      </div>
    </div>
  );
};

export default withGlobal<OwnProps>(
  (global, { contact }): StateProps => {
    const { countryList: { phoneCodes: phoneCodeList } } = global;
    const user = selectUser(global, contact.userId);

    return {
      user,
      phoneCodeList,
    };
  },
)(Contact);
