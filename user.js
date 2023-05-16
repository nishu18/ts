var Users;
(function (Users) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    Users.Parent = Parent;
})(Users || (Users = {}));
