import type { ActionReturnType } from '../../types';

import { DEFAULT_PLAYBACK_RATE } from '../../../config';
import { getCurrentTabId } from '../../../util/establishMultitabRole';
import { addActionHandler } from '../../index';
import { updateTabState } from '../../reducers/tabs';
import { selectTabState } from '../../selectors';

addActionHandler('openMediaViewer', (global, actions, payload): ActionReturnType => {
  const {
    chatId, threadId, mediaId, avatarOwnerId, profilePhotoIndex, origin, volume, playbackRate, isMuted,
    withDynamicLoading, tabId = getCurrentTabId(),
  } = payload;

  const tabState = selectTabState(global, tabId);

  return updateTabState(global, {
    mediaViewer: {
      ...tabState.mediaViewer,
      chatId,
      threadId,
      mediaId,
      avatarOwnerId,
      profilePhotoIndex,
      origin,
      isHidden: false,
      volume: volume ?? tabState.mediaViewer.volume,
      playbackRate: (
        playbackRate
        || tabState.mediaViewer.playbackRate
        || global.mediaViewer.lastPlaybackRate
        || DEFAULT_PLAYBACK_RATE
      ),
      isMuted: isMuted || tabState.mediaViewer.isMuted,
      withDynamicLoading,
    },
    forwardMessages: {},
  }, tabId);
});

addActionHandler('closeMediaViewer', (global, actions, payload): ActionReturnType => {
  const { tabId = getCurrentTabId() } = payload || {};
  const {
    volume, isMuted, playbackRate, isHidden,
  } = selectTabState(global, tabId).mediaViewer;

  return updateTabState(global, {
    mediaViewer: {
      volume,
      isMuted,
      isHidden,
      playbackRate,
    },
  }, tabId);
});

addActionHandler('setMediaViewerVolume', (global, actions, payload): ActionReturnType => {
  const {
    volume,
    tabId = getCurrentTabId(),
  } = payload;

  return updateTabState(global, {
    mediaViewer: {
      ...selectTabState(global, tabId).mediaViewer,
      volume,
      isMuted: false,
    },
  }, tabId);
});

addActionHandler('setMediaViewerPlaybackRate', (global, actions, payload): ActionReturnType => {
  const {
    playbackRate,
    tabId = getCurrentTabId(),
  } = payload;

  global = {
    ...global,
    mediaViewer: {
      ...global.mediaViewer,
      lastPlaybackRate: playbackRate,
    },
  };

  return updateTabState(global, {
    mediaViewer: {
      ...selectTabState(global, tabId).mediaViewer,
      playbackRate,
    },
  }, tabId);
});

addActionHandler('setMediaViewerMuted', (global, actions, payload): ActionReturnType => {
  const {
    isMuted,
    tabId = getCurrentTabId(),
  } = payload;

  return updateTabState(global, {
    mediaViewer: {
      ...selectTabState(global, tabId).mediaViewer,
      isMuted,
    },
  }, tabId);
});

addActionHandler('setMediaViewerHidden', (global, actions, payload): ActionReturnType => {
  const { isHidden, tabId = getCurrentTabId() } = payload;

  return updateTabState(global, {
    mediaViewer: {
      ...selectTabState(global, tabId).mediaViewer,
      isHidden,
    },
  }, tabId);
});
