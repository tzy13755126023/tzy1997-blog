/*
 * @Descripttion: ethan.js
 * @version: 1.0.0
 * @Author: tzy1997
 * @Date: 2020-12-14 21:26:14
 * @LastEditors: tzy1997
 * @LastEditTime: 2021-11-26 20:39:20
 */
/* 友情链接页面 头像找不到时 替换图片 */
if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i < imgObj.length; i++) {
        imgObj[i].onerror = function () { this.src = "https://bu.dusays.com/2021/03/27/0106da541a922.gif" }
    }
}

/* 手机侧边栏默认不展开 */
function mobile_nav_close() {
    var mobile_sidebar_menus = document.getElementById("sidebar-menus");
    if (mobile_sidebar_menus) {
        var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
            "menus_item_child"
        );
        var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
        for (var i = 0; i < menus_item_child.length; i++) {
            menus_item_child[i].style.display = "none";
        }
    };
}

/* 禁止打開控制臺 查看源码等等 */
function forbidden_control() {
    $.extend({
        message: function (a) {
            var b = {
                title: "",
                message: "操作成功",
                time: "3000",
                type: "success",
                showClose: !0,
                autoClose: !0,
                onClose: function () { }
            };
            "string" == typeof a && (b.message = a), "object" == typeof a && (b = $.extend({}, b, a));
            var c, d, e, f = b.showClose ? '<div class="c-message--close">×</div>' : "",
                g = "" !== b.title ? '<h2 class="c-message__title">' + b.title + "</h2>" : "",
                h = '<div class="c-message animated animated-lento slideInRight"><i class=" c-message--icon c-message--' + b.type + '"></i><div class="el-notification__group">' + g + '<div class="el-notification__content">' + b.message + "</div>" + f + "</div></div>",
                i = $("body"),
                j = $(h);
            d = function () {
                j.addClass("slideOutRight"), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    e()
                })
            }, e = function () {
                j.remove(), b.onClose(b), clearTimeout(c)
            }, $(".c-message").remove(), i.append(j), j.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                j.removeClass("messageFadeInDown")
            }), i.on("click", ".c-message--close", function (a) {
                d()
            }), b.autoClose && (c = setTimeout(function () {
                d()
            }, b.time))
        }
    }),
        document.onkeydown = function (e) {
            if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return $.message({
                message: "采用本站js及css请注明来源，禁止商业使用！",
                title: "你真坏，不能打开控制台喔!",
                type: "error",
                autoHide: !1,
                time: "3000"
            }), event.keyCode = 0, event.returnValue = !1, !1
        }, document.oncontextmenu = function () {
            return $.message({
                message: "采用本站js及css请注明来源，禁止商业使用！",
                title: "不能右键/长按喔！",
                type: "error",
                autoHide: !1,
                time: "3000"
            }), !1
        },
        function () {
            function e() {
                var e = new Date;
                if (new Date - e > 0) {
                    debugger
                    try {
                        document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                    } catch (e) { }
                    return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', !0
                }
                return !1
            }

            function t() {
                for (; e();) e()
            }
            e() ? t() : window.onblur = function () {
                setTimeout(function () {
                    t()
                }, 500)
            }
        }(),
        function () {
            var e = /x/;
            e.toString = function () {
                try {
                    document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                } catch (e) { }
                return document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>', "禁止打开控制台！"
            }
        }(),
        function () {
            var e = document.createElement("div");
            Object.defineProperty(e, "id", {
                get: function () {
                    try {
                        document.getElementsByTagName("html")[0].innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                    } catch (e) { }
                    document.body.innerHTML = '<div style="width: 100%;height: 50px;font-size: 30px;text-align: center;font-weight: bold;">啊这个网站炸了，<a href="/" style="color:#4285f4;">点击返回</a>试试吧~</div>'
                }
            }), console.log(e)
        }()
}
mobile_nav_close();
// forbidden_control();

/* 打印信息 */
/* console.log("\n %c Ethan_Blog v1.0.0 %c 博客地址为：https://tzy1997.com \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
console.log("\n %c QQ：2938526863 %c VX: ethan4116                    \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
console.log(`%c
    I wish you to become your own sun , no need to rely on who’s light.                                                   
    ----愿你成为自己的太阳,无需凭借谁的光芒.                                                                                 \n`,
    "color: red; background: #030307; padding:5px 0;")  */