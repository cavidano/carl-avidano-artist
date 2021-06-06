'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var SocialShare = function (_React$Component) {
    _inherits(SocialShare, _React$Component);

    function SocialShare() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SocialShare);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SocialShare.__proto__ || Object.getPrototypeOf(SocialShare)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            toggleButtonText: "Share"
        }, _this.shareToggle = function (e) {
            _this.setState({
                toggleButtonText: "Thanks for sharing!"
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SocialShare, [{
        key: "render",
        value: function render() {

            // const url = window.location.href;
            var url = 'https://reactjs.org/';

            var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
            var twitterUrl = "https://twitter.com/intent/tweet?url=" + url;
            var linkedinUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;

            return React.createElement(
                "div",
                { className: "share-this display-flex align-items-center font-size-md" },
                React.createElement(
                    "div",
                    { className: "button-group", onClick: this.shareToggle },
                    React.createElement(
                        "a",
                        { className: "button button--icon-only", href: facebookUrl, target: "_blank", "aria-label": "Facebook" },
                        React.createElement("span", { className: "nyc_icon_facebook", "aria-hidden": "true" })
                    ),
                    React.createElement(
                        "a",
                        { className: "button button--icon-only", href: twitterUrl, target: "_blank", "aria-label": "Twitter" },
                        React.createElement("span", { className: "nyc_icon_twitter", "aria-hidden": "true" })
                    ),
                    React.createElement(
                        "a",
                        { className: "button button--icon-only", href: linkedinUrl, target: "_blank", "aria-label": "Linked" },
                        React.createElement("span", { className: "nyc_icon_linkedin", "aria-hidden": "true" })
                    )
                ),
                React.createElement(
                    "span",
                    { className: "margin-left-2 opacity-50" },
                    React.createElement("span", { className: "nyc_icon_share", "aria-hidden": "true" }),
                    React.createElement(
                        "span",
                        { className: "margin-x-1" },
                        this.state.toggleButtonText
                    )
                )
            );
        }
    }]);

    return SocialShare;
}(React.Component);

var shareContainer = document.querySelector('#share_container');
ReactDOM.render(e(SocialShare), shareContainer);