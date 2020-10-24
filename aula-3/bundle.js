"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var todolist = /*#__PURE__*/function () {
  function todolist() {
    _classCallCheck(this, todolist);

    this.todos = [];
  }

  _createClass(todolist, [{
    key: "addtodo",
    value: function addtodo() {
      this.todos.push('novo todo');
      console.log(this.todos);
    }
  }]);

  return todolist;
}();

var minhalista = new todolist();

document.getElementById('novotodo').onclick = function () {
  minhalista.addtodo();
};
