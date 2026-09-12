/*
 * Temporary stability entrypoint.
 * The production application logic is intentionally preserved until the full
 * monolithic script is split mechanically, so behavior is not changed by a
 * partial refactor.
 */
window.addEventListener('error',e=>console.error('[ARCHIVE]',e.error||e.message));
window.addEventListener('unhandledrejection',e=>console.error('[ARCHIVE]',e.reason));
