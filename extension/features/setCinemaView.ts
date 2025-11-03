export default function setCinemaView() {
  new MutationObserver(() => {
    const cinemaView = document.querySelector('.Root__cinema-view');
    const rightSidebar = document.querySelector('.Root__right-sidebar') as HTMLElement;

    // Player is put behind cinema view for some reason?
    const player = document.querySelector('.Root__now-playing-bar') as HTMLElement;

    if (rightSidebar) {
      if (cinemaView) {
        rightSidebar.style.display = 'none';

        // Fix that by literally just moving it one above
        player.style.zIndex = 'calc(var(--now-playing-bar-grid-area-z-index) + 1)';
      } else {
        rightSidebar.style.removeProperty('display');
        player.style.zIndex = 'var(--now-playing-bar-grid-area-z-index)';
      }
    }
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
}
