export function changePaddingTopMobile(padding = 0) {
  const element1: any = document.getElementById('fix-issue-mobile');
  const element2: any = document.getElementById('custom-id-chat-list-inf-scroll');

  element1.style.paddingTop = `${padding}px`;
  element2.style.paddingTop = `${padding}px`;

  return true;
}
