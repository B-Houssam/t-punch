"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireInputEvent = fireInputEvent;

var _dom = require("@testing-library/dom");

var _utils = require("../../utils");

function fireInputEvent(element, {
  newValue,
  newSelectionStart,
  eventOverrides
}) {
  // apply the changes before firing the input event, so that input handlers can access the altered dom and selection
  if ((0, _utils.isContentEditable)(element)) {
    applyNative(element, 'textContent', newValue);
  }
  /* istanbul ignore else */
  else if ((0, _utils.isElementType)(element, ['input', 'textarea'])) {
      applyNative(element, 'value', newValue);
    } else {
      // TODO: properly type guard
      throw new Error('Invalid Element');
    }

  setSelectionRangeAfterInput(element, newSelectionStart);

  _dom.fireEvent.input(element, { ...eventOverrides
  });

  setSelectionRangeAfterInputHandler(element, newValue, newSelectionStart);
}

function setSelectionRangeAfterInput(element, newSelectionStart) {
  (0, _utils.setSelectionRange)(element, newSelectionStart, newSelectionStart);
}

function setSelectionRangeAfterInputHandler(element, newValue, newSelectionStart) {
  const value = (0, _utils.getValue)(element); // don't apply this workaround on elements that don't necessarily report the visible value - e.g. number
  // TODO: this could probably be only applied when there is keyboardState.carryValue

  const isUnreliableValue = value === '' && (0, _utils.hasUnreliableEmptyValue)(element);

  if (!isUnreliableValue && value === newValue) {
    const {
      selectionStart
    } = (0, _utils.getSelectionRange)(element);

    if (selectionStart === value.length) {
      // The value was changed as expected, but the cursor was moved to the end
      // TODO: this could probably be only applied when we work around a framework setter on the element in applyNative
      (0, _utils.setSelectionRange)(element, newSelectionStart, newSelectionStart);
    }
  }
}
/**
 * React tracks the changes on element properties.
 * This workaround tries to alter the DOM element without React noticing,
 * so that it later picks up the change.
 *
 * @see https://github.com/facebook/react/blob/148f8e497c7d37a3c7ab99f01dec2692427272b1/packages/react-dom/src/client/inputValueTracking.js#L51-L104
 */


function applyNative(element, propName, propValue) {
  const descriptor = Object.getOwnPropertyDescriptor(element, propName);
  const nativeDescriptor = Object.getOwnPropertyDescriptor(element.constructor.prototype, propName);

  if (descriptor && nativeDescriptor) {
    Object.defineProperty(element, propName, nativeDescriptor);
  }

  element[propName] = propValue;

  if (descriptor) {
    Object.defineProperty(element, propName, descriptor);
  }
}