import type { FC } from '../../../lib/teact/teact';
import React, {
  memo, useCallback, useEffect, useMemo, useRef,
} from '../../../lib/teact/teact';
import { getActions, withGlobal } from '../../../global';

import type { GlobalState, TabState } from '../../../global/types';
import type { AnimationLevel, ISettings } from '../../../types';
import { LeftColumnContent, SettingsScreens } from '../../../types';

import {
  APP_NAME,
  ARCHIVED_FOLDER_ID,
  DEBUG,
  IS_BETA,
  IS_ELECTRON,
} from '../../../config';
import { IS_APP } from '../../../util/windowEnvironment';
import buildClassName from '../../../util/buildClassName';
import { formatDateToString } from '../../../util/dateFormat';
import {
  selectCanSetPasscode,
  selectCurrentMessageList, selectIsCurrentUserPremium, selectTabState, selectTheme,
} from '../../../global/selectors';
import useLang from '../../../hooks/useLang';
import useConnectionStatus from '../../../hooks/useConnectionStatus';
import { useHotkeys } from '../../../hooks/useHotkeys';
import captureEscKeyListener from '../../../util/captureEscKeyListener';
import useLeftHeaderButtonRtlForumTransition from './hooks/useLeftHeaderButtonRtlForumTransition';
import { useFullscreenStatus } from '../../../hooks/useFullscreen';
import useElectronDrag from '../../../hooks/useElectronDrag';
import { useFolderManagerForUnreadCounters } from '../../../hooks/useFolderManager';
import useAppLayout from '../../../hooks/useAppLayout';

import DropdownMenu from '../../ui/DropdownMenu';
import MenuItem from '../../ui/MenuItem';
import Button from '../../ui/Button';
import SearchInput from '../../ui/SearchInput';
import PickerSelectedItem from '../../common/PickerSelectedItem';
import ShowTransition from '../../ui/ShowTransition';
import ConnectionStatusOverlay from '../ConnectionStatusOverlay';
import StatusButton from './StatusButton';

import './LeftMainHeader.scss';

/**
 * TL - Change Left Main Header
 * Description:
 *   - use hook useCallback instead of useLastCallBack.
 *   - Hide some options in MenuDropdown.
 */

type OwnProps = {
  shouldHideSearch?: boolean;
  content: LeftColumnContent;
  contactsFilter: string;
  isClosingSearch?: boolean;
  shouldSkipTransition?: boolean;
  onSearchQuery: (query: string) => void;
  onSelectSettings: () => void;
  onSelectContacts: () => void;
  onSelectArchived: () => void;
  onReset: () => void;
};

type StateProps =
  {
    searchQuery?: string;
    isLoading: boolean;
    currentUserId?: string;
    globalSearchChatId?: string;
    searchDate?: number;
    theme: ISettings['theme'];
    animationLevel: AnimationLevel;
    isMessageListOpen: boolean;
    isCurrentUserPremium?: boolean;
    isConnectionStatusMinimized: ISettings['isConnectionStatusMinimized'];
    areChatsLoaded?: boolean;
    hasPasscode?: boolean;
    canSetPasscode?: boolean;
  }
  & Pick<GlobalState, 'connectionState' | 'isSyncing' | 'archiveSettings'>
  & Pick<TabState, 'canInstall'>;

// const WEBK_VERSION_URL = 'https://web.telegram.org/k/';

const LeftMainHeader: FC<OwnProps & StateProps> = ({
  shouldHideSearch,
  content,
  contactsFilter,
  onSearchQuery,
  isClosingSearch,
  onSelectSettings,
  onSelectContacts,
  onSelectArchived,
  onReset,
  searchQuery,
  isLoading,
  isCurrentUserPremium,
  shouldSkipTransition,
  currentUserId,
  globalSearchChatId,
  searchDate,
  theme,
  connectionState,
  isSyncing,
  isMessageListOpen,
  isConnectionStatusMinimized,
  areChatsLoaded,
  hasPasscode,
  canSetPasscode,
  archiveSettings,
}) => {
  const {
    openChat,
    setGlobalSearchDate,
    setSettingOption,
    setGlobalSearchChatId,
    openChatByUsername,
    lockScreen,
    requestNextSettingsScreen,
  } = getActions();

  const lang = useLang();
  const { isMobile } = useAppLayout();
  const hasMenu = content === LeftColumnContent.ChatList;
  const clearedDateSearchParam = { date: undefined };
  const clearedChatSearchParam = { id: undefined };
  const selectedSearchDate = useMemo(() => {
    return searchDate
      ? formatDateToString(new Date(searchDate * 1000))
      : undefined;
  }, [searchDate]);

  const archivedUnreadChatsCount = useFolderManagerForUnreadCounters()[ARCHIVED_FOLDER_ID]?.chatsCount || 0;

  const { connectionStatus, connectionStatusText, connectionStatusPosition } = useConnectionStatus(
    lang, connectionState, isSyncing, isMessageListOpen, isConnectionStatusMinimized, !areChatsLoaded,
  );

  const handleLockScreenHotkey = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasPasscode) {
      lockScreen();
    } else {
      requestNextSettingsScreen({ screen: SettingsScreens.PasscodeDisabled });
    }
  }, [hasPasscode]);

  useHotkeys(canSetPasscode ? {
    'Ctrl+Shift+L': handleLockScreenHotkey,
    'Alt+Shift+L': handleLockScreenHotkey,
    'Meta+Shift+L': handleLockScreenHotkey,
    ...(IS_APP && { 'Mod+L': handleLockScreenHotkey }),
  } : undefined);

  // const withOtherVersions = window.location.hostname === PRODUCTION_HOSTNAME || IS_TEST;

  const MainButton: FC<{ onTrigger: () => void; isOpen?: boolean }> = useMemo(() => {
    return ({ onTrigger, isOpen }) => (
      <Button
        round
        ripple={hasMenu && !isMobile}
        size="smaller"
        color="translucent"
        className={isOpen ? 'active' : ''}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={hasMenu ? onTrigger : () => onReset()}
        ariaLabel={hasMenu ? lang('AccDescrOpenMenu2') : 'Return to chat list'}
      >
        {
          /**
           * TL - Remove animation hamburger icon when search bar is change state.
           */
        }
        <div className={buildClassName(
          'animated-menu-icon no-animation state-back',
        )}
        />
      </Button>
    );
  }, [hasMenu, isMobile, lang, onReset]);

  const handleSearchFocus = useCallback(() => {
    if (!searchQuery) {
      onSearchQuery('');
    }
  }, [searchQuery, onSearchQuery]);

  const toggleConnectionStatus = useCallback(() => {
    setSettingOption({ isConnectionStatusMinimized: !isConnectionStatusMinimized });
  }, [isConnectionStatusMinimized, setSettingOption]);

  const handleSelectSaved = useCallback(() => {
    openChat({ id: currentUserId, shouldReplaceHistory: true });
  }, [currentUserId, openChat]);

  // const handleDarkModeToggle = useLastCallback((e: React.SyntheticEvent<HTMLElement>) => {
  //   e.stopPropagation();
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setSettingOption({ theme: newTheme });
  //   setSettingOption({ shouldUseSystemTheme: false });
  // });

  useEffect(() => {
    setSettingOption({ theme: 'dark' });
    setSettingOption({ shouldUseSystemTheme: false });
  }, []);

  // const handleAnimationLevelChange = useLastCallback((e: React.SyntheticEvent<HTMLElement>) => {
  //   e.stopPropagation();

  //   let newLevel = animationLevel + 1;
  //   if (newLevel > ANIMATION_LEVEL_MAX) {
  //     newLevel = ANIMATION_LEVEL_MIN;
  //   }
  //   const performanceSettings = newLevel === ANIMATION_LEVEL_MIN
  //     ? INITIAL_PERFORMANCE_STATE_MIN
  //     : (newLevel === ANIMATION_LEVEL_MAX ? INITIAL_PERFORMANCE_STATE_MAX : INITIAL_PERFORMANCE_STATE_MID);

  //   setSettingOption({ animationLevel: newLevel as AnimationLevel });
  //   updatePerformanceSettings(performanceSettings);
  // });

  // const handleChangelogClick = useLastCallback(() => {
  //   window.open(BETA_CHANGELOG_URL, '_blank', 'noopener');
  // });

  // const handleSwitchToWebK = useLastCallback(() => {
  //   setPermanentWebVersion('K');
  //   clearWebsync();
  //   skipLockOnUnload();
  // });

  const handleOpenTipsChat = useCallback(() => {
    openChatByUsername({ username: lang('Settings.TipsUsername') });
  }, [lang, openChatByUsername]);

  // const handleBugReportClick = useCallback(() => {
  //   openUrl({ url: FEEDBACK_URL });
  // }, [openUrl]);

  const handleLockScreen = useCallback(() => {
    lockScreen();
  }, [lockScreen]);

  const isSearchFocused = (
    Boolean(globalSearchChatId)
    || content === LeftColumnContent.GlobalSearch
    || content === LeftColumnContent.Contacts
  );

  useEffect(() => (isSearchFocused ? captureEscKeyListener(() => onReset()) : undefined), [isSearchFocused, onReset]);

  const searchInputPlaceholder = content === LeftColumnContent.Contacts
    ? lang('SearchFriends')
    : lang('Search');

  const versionString = IS_BETA ? `${APP_VERSION} Beta (${APP_REVISION})` : (DEBUG ? APP_REVISION : APP_VERSION);
  // const animationLevelValue = animationLevel !== ANIMATION_LEVEL_MIN
  //   ? (animationLevel === ANIMATION_LEVEL_MAX ? 'max' : 'mid')
  //   : 'min';

  const isFullscreen = useFullscreenStatus();

  // Disable dropdown menu RTL animation for resize
  const {
    shouldDisableDropdownMenuTransitionRef,
    handleDropdownMenuTransitionEnd,
  } = useLeftHeaderButtonRtlForumTransition(shouldHideSearch);

  // eslint-disable-next-line no-null/no-null
  const headerRef = useRef<HTMLDivElement>(null);
  useElectronDrag(headerRef);

  const menuItems = useMemo(() => (
    <>
      <MenuItem
        icon="saved-messages"
        onClick={handleSelectSaved}
      >
        {lang('SavedMessages')}
      </MenuItem>
      {archiveSettings.isHidden && (
        <MenuItem
          icon="archive"
          onClick={onSelectArchived}
        >
          <span className="menu-item-name">{lang('ArchivedChats')}</span>
          {archivedUnreadChatsCount > 0 && (
            <div className="right-badge">{archivedUnreadChatsCount}</div>
          )}
        </MenuItem>
      )}
      <MenuItem
        icon="user"
        onClick={onSelectContacts}
      >
        {lang('Contacts')}
      </MenuItem>
      <MenuItem
        icon="settings"
        onClick={onSelectSettings}
      >
        {lang('Settings')}
      </MenuItem>
      {/* <MenuItem
        icon="darkmode"
        onClick={handleDarkModeToggle}
      >
        <span className="menu-item-name">{lang('lng_menu_night_mode')}</span>
        <Switcher
          id="darkmode"
          label={lang(theme === 'dark' ? 'lng_settings_disable_night_theme' : 'lng_settings_enable_night_theme')}
          checked={theme === 'dark'}
          noAnimation
        />
      </MenuItem> */}
      {/* <MenuItem
        icon="animations"
        onClick={handleAnimationLevelChange}
      >
        <span className="menu-item-name capitalize">{lang('Appearance.Animations').toLowerCase()}</span>
        <Toggle value={animationLevelValue} />
      </MenuItem> */}
      <MenuItem
        icon="help"
        onClick={handleOpenTipsChat}
      >
        {lang('TelegramFeatures')}
      </MenuItem>
      {/* <MenuItem
        icon="bug"
        onClick={handleBugReportClick}
      >
        Report Bug
      </MenuItem> */}
      {/* {IS_BETA && (
        <MenuItem
          icon="permissions"
          onClick={handleChangelogClick}
        >
          Beta Changelog
        </MenuItem>
      )} */}
      {/* {withOtherVersions && (
        <MenuItem
          icon="K"
          isCharIcon
          href={WEBK_VERSION_URL}
          onClick={handleSwitchToWebK}
        >
          Switch to K Version
        </MenuItem>
      )} */}
      {/* {canInstall && (
        <MenuItem
          icon="install"
          onClick={getPromptInstall()}
        >
          Install App
        </MenuItem>
      )} */}
    </>
  ), [
    archivedUnreadChatsCount, lang, handleOpenTipsChat, handleSelectSaved,
    onSelectArchived, onSelectContacts, onSelectSettings, archiveSettings,
  ]);

  return (
    <div className="LeftMainHeader">
      <div id="LeftMainHeader" className="left-header" ref={headerRef}>
        {lang.isRtl && <div className="DropdownMenuFiller" />}
        {
          /**
           * TL - Trigger hamburger icon
           * Description:
           *   - Hide hamburger icon when search bar is focused in and visible it when it is focused out.
           *   - Handle by 2 className: 'custom-dropdown-invisible' and 'custom-dropdown-visible'
           */
        }
        <DropdownMenu
          trigger={MainButton}
          footer={`${APP_NAME} ${versionString}`}
          className={buildClassName(
            'main-menu',
            lang.isRtl && 'rtl',
            shouldHideSearch && lang.isRtl && 'right-aligned',
            shouldDisableDropdownMenuTransitionRef.current && lang.isRtl && 'disable-transition',
            isSearchFocused ? 'custom-dropdown-invisible' : 'custom-dropdown-visible',
          )}
          positionX={shouldHideSearch && lang.isRtl ? 'right' : 'left'}
          transformOriginX={IS_ELECTRON && !isFullscreen ? 90 : undefined}
          onTransitionEnd={lang.isRtl ? handleDropdownMenuTransitionEnd : undefined}
        >
          {menuItems}
        </DropdownMenu>
        {
          /**
           * TL: Custom search input styles
           */
        }
        <SearchInput
          inputId="telegram-search-input"
          parentContainerClassName="LeftSearch"
          className={buildClassName(
            (globalSearchChatId || searchDate) ? 'with-picker-item' : undefined,
            shouldHideSearch && 'SearchInput--hidden',
            'custom-style',
          )}
          value={isClosingSearch ? undefined : (contactsFilter || searchQuery)}
          focused={isSearchFocused}
          isLoading={isLoading || connectionStatusPosition === 'minimized'}
          spinnerColor={connectionStatusPosition === 'minimized' ? 'gray' : undefined}
          spinnerBackgroundColor={connectionStatusPosition === 'minimized' && theme === 'light' ? 'light' : undefined}
          placeholder={searchInputPlaceholder}
          autoComplete="off"
          canClose={Boolean(globalSearchChatId || searchDate)}
          onChange={onSearchQuery}
          onReset={onReset}
          onFocus={handleSearchFocus}
          onSpinnerClick={connectionStatusPosition === 'minimized' ? toggleConnectionStatus : undefined}
        >
          {selectedSearchDate && (
            <PickerSelectedItem
              icon="calendar"
              title={selectedSearchDate}
              canClose
              isMinimized={Boolean(globalSearchChatId)}
              className="search-date"
              onClick={setGlobalSearchDate}
              clickArg={clearedDateSearchParam}
            />
          )}
          {globalSearchChatId && (
            <PickerSelectedItem
              chatOrUserId={globalSearchChatId}
              onClick={setGlobalSearchChatId}
              canClose
              clickArg={clearedChatSearchParam}
            />
          )}
        </SearchInput>
        {isCurrentUserPremium && <StatusButton />}
        {hasPasscode && (
          <Button
            round
            ripple={!isMobile}
            size="smaller"
            color="translucent"
            ariaLabel={`${lang('ShortcutsController.Others.LockByPasscode')} (Ctrl+Shift+L)`}
            onClick={handleLockScreen}
            className={buildClassName(!isCurrentUserPremium && 'extra-spacing')}
          >
            <i className="icon icon-lock" />
          </Button>
        )}
        <ShowTransition
          isOpen={connectionStatusPosition === 'overlay'}
          isCustom
          className="connection-state-wrapper"
        >
          <ConnectionStatusOverlay
            connectionStatus={connectionStatus}
            connectionStatusText={connectionStatusText!}
            onClick={toggleConnectionStatus}
          />
        </ShowTransition>
      </div>
    </div>
  );
};

export default memo(withGlobal<OwnProps>(
  (global): StateProps => {
    const tabState = selectTabState(global);
    const {
      query: searchQuery, fetchingStatus, chatId, date,
    } = tabState.globalSearch;
    const {
      currentUserId, connectionState, isSyncing, archiveSettings,
    } = global;
    const { isConnectionStatusMinimized, animationLevel } = global.settings.byKey;

    return {
      searchQuery,
      isLoading: fetchingStatus ? Boolean(fetchingStatus.chats || fetchingStatus.messages) : false,
      currentUserId,
      globalSearchChatId: chatId,
      searchDate: date,
      theme: selectTheme(global),
      animationLevel,
      connectionState,
      isSyncing,
      isMessageListOpen: Boolean(selectCurrentMessageList(global)),
      isConnectionStatusMinimized,
      isCurrentUserPremium: selectIsCurrentUserPremium(global),
      areChatsLoaded: Boolean(global.chats.listIds.active),
      hasPasscode: Boolean(global.passcode.hasPasscode),
      canInstall: Boolean(tabState.canInstall),
      archiveSettings,
      canSetPasscode: selectCanSetPasscode(global),
    };
  },
)(LeftMainHeader));
