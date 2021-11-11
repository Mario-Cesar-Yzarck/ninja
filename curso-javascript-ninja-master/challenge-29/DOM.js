(function (win, doc) {
  "use strict";
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    this.element.forEach((e) => {
      return e.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    this.element.forEach((e) => {
      return e.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.map = function map(callback) {
    return callback();
  };

  DOM.prototype.foreach = function foreach(array) {
    for (let element of array) {
      for (let i = 0; i < array.length; i++) {
        return element;
      }
    }
  };
  window.DOM = DOM;
})(window, document);
