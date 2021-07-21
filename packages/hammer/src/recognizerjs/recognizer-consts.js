const STATE_POSSIBLE = 1;
const STATE_BEGAN = 2;
const STATE_CHANGED = 4;
const STATE_ENDED = 8;
const STATE_RECOGNIZED = STATE_ENDED;
const STATE_CANCELLED = 16;
const STATE_FAILED = 32;

export {
  STATE_POSSIBLE,
  STATE_BEGAN,
  STATE_CHANGED,
  STATE_ENDED,
  STATE_RECOGNIZED,
  STATE_CANCELLED,
  STATE_FAILED,
};
