function CSpriteLibrary() {
    var a, d, b, c, f, e;
    this.init = function(g, k, l) {
        b = d = 0;
        c = g;
        f = k;
        e = l;
        a = {}
    };
    this.addSprite = function(b, c) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: c,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        f.call(e)
    };
    this._onSpriteLoaded = function() {
        c.call(e);
        ++b == d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
            this.oSpriteLibrary._onSpriteLoaded()
        }, a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1024,
    CANVAS_HEIGHT = 768,
    DISABLE_SOUND_MOBILE = !1,
    FPS_TIME = 1E3 / 24,
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    ON_PRESS_MOVE = 6,
    SCOPE_ACCELERATION, SCOPE_FRICTION, MAX_SCOPE_SPEED, NUM_BULLETS, SCORE_HIT, BONUS_TIME, PLAYER_LIVES, DUCK_INCREASE_SPEED, DUCK_START_SPEED = 1;

function CToggle(a, d, b, c) {
    var f, e, g, k;
    this._init = function(a, b, c, d) {
        e = [];
        g = [];
        var n = new createjs.SpriteSheet({
            images: [c],
            frames: {
                width: c.width / 2,
                height: c.height,
                regX: c.width / 2 / 2,
                regY: c.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        f = d;
        k = createSprite(n, "state_" + f, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
        k.x = a;
        k.y = b;
        k.stop();
        s_oStage.addChild(k);
        this._initListener()
    };
    this.unload = function() {
        k.off("mousedown", this.buttonDown);
        k.off("pressup", this.buttonRelease);
        s_oStage.removeChild(k)
    };
    this._initListener = function() {
        k.on("mousedown", this.buttonDown);
        k.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        e[a] = b;
        g[a] = c
    };
    this.setActive = function(a) {
        f = a;
        k.gotoAndStop("state_" + f)
    };
    this.buttonRelease = function() {
        k.scaleX = 1;
        k.scaleY = 1;
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click");
        f = !f;
        k.gotoAndStop("state_" + f);
        e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(g[ON_MOUSE_UP], f)
    };
    this.buttonDown = function() {
        k.scaleX = .9;
        k.scaleY = .9;
        e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])
    };
    this._init(a, d, b, c)
}
var s_iScaleFactor = 1,
    s_oCanvasLeft, s_oCanvasTop;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}
$(window).ready(function() {
    sizeHandler()
});
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = CANVAS_WIDTH,
            b = CANVAS_HEIGHT,
            c, d;
        !0 === inIframe() && "ios" == getMobileOperatingSystem() ? top.location.href = document.location.href : (c = window.innerWidth, d = window.innerHeight, multiplier = s_iScaleFactor = Math.min(d / b, c / a), a *= multiplier, b *= multiplier, $("#canvas").css("width", a + "px"), $("#canvas").css("height", b + "px"), $("#canvas").css("left", c / 2 - a / 2 + "px"), s_oCanvasLeft = $("#canvas").offset().left, s_oCanvasTop = $("#canvas").offset().top)
    }
}

function getMobileOperatingSystem() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i) ? "ios" : a.match(/Android/i) ? "android" : "unknown"
}
function inIframe() {
    try {
        return window.self !== window.top
    } catch (a) {
        return !0
    }
};

function createBitmap(a, d, b) {
    var c = new createjs.Bitmap(a),
        f = new createjs.Shape;
    d && b ? f.graphics.beginFill("#fff").drawRect(0, 0, d, b) : f.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = f;
    return c
}
function createSprite(a, d, b, c, f, e) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -c, f, e);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}
function shuffle(a) {
    for (var d = a.length, b, c; 0 !== d;) c = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[c], a[c] = b;
    return a
}
function easeLinear(a, d, b, c) {
    return b * a / c + d
}
function easeInQuad(a, d, b, c) {
    return b * (a /= c) * a + d
}
function easeInSine(a, d, b, c) {
    return -b * Math.cos(a / c * (Math.PI / 2)) + b + d
}
function easeInCubic(a, d, b, c) {
    return b * (a /= c) * a * a + d
}

function getTrajectoryPoint(a, d) {
    var b = new createjs.Point,
        c = (1 - a) * (1 - a),
        f = a * a;
    b.x = c * d.start.x + 2 * (1 - a) * a * d.traj.x + f * d.end.x;
    b.y = c * d.start.y + 2 * (1 - a) * a * d.traj.y + f * d.end.y;
    return b
}
function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = parseFloat(a - 60 * d).toFixed(1);
    var b = "",
        b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return b = 10 > a ? b + ("0" + a) : b + a
}
function degreesToRadians(a) {
    return a * Math.PI / 180
}
function checkRectCollision(a, d) {
    var b, c;
    b = getBounds(a, .9);
    c = getBounds(d, .98);
    return calculateIntersection(b, c)
}

function calculateIntersection(a, d) {
    var b, c, f, e, g, k, l, h;
    b = a.x + (f = a.width / 2);
    c = a.y + (e = a.height / 2);
    g = d.x + (k = d.width / 2);
    l = d.y + (h = d.height / 2);
    b = Math.abs(b - g) - (f + k);
    c = Math.abs(c - l) - (e + h);
    return 0 > b && 0 > c ? (b = Math.min(Math.min(a.width, d.width), -b), c = Math.min(Math.min(a.height, d.height), -c), {
        x: Math.max(a.x, d.x),
        y: Math.max(a.y, d.y),
        width: b,
        height: c,
        rect1: a,
        rect2: d
    }) : null
}

function getBounds(a, d) {
    var b = {
        x: Infinity,
        y: Infinity,
        width: 0,
        height: 0
    };
    if (a instanceof createjs.Container) {
        b.x2 = -Infinity;
        b.y2 = -Infinity;
        var c = a.children,
            f = c.length,
            e, g;
        for (g = 0; g < f; g++) e = getBounds(c[g], 1), e.x < b.x && (b.x = e.x), e.y < b.y && (b.y = e.y), e.x + e.width > b.x2 && (b.x2 = e.x + e.width), e.y + e.height > b.y2 && (b.y2 = e.y + e.height);
        Infinity == b.x && (b.x = 0);
        Infinity == b.y && (b.y = 0);
        Infinity == b.x2 && (b.x2 = 0);
        Infinity == b.y2 && (b.y2 = 0);
        b.width = b.x2 - b.x;
        b.height = b.y2 - b.y;
        delete b.x2;
        delete b.y2
    } else {
        var k, l;
        a instanceof createjs.Bitmap ? (f = a.sourceRect || a.image, g = f.width * d, k = f.height * d) : a instanceof createjs.Sprite ? a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image ? (f = a.spriteSheet.getFrame(a.currentFrame), g = f.rect.width, k = f.rect.height, c = f.regX, l = f.regY) : (b.x = a.x || 0, b.y = a.y || 0) : (b.x = a.x || 0, b.y = a.y || 0);
        c = c || 0;
        g = g || 0;
        l = l || 0;
        k = k || 0;
        b.regX = c;
        b.regY = l;
        f = a.localToGlobal(0 - c, 0 - l);
        e = a.localToGlobal(g - c, k - l);
        g = a.localToGlobal(g - c, 0 - l);
        c = a.localToGlobal(0 - c, k - l);
        b.x = Math.min(Math.min(Math.min(f.x, e.x), g.x), c.x);
        b.y = Math.min(Math.min(Math.min(f.y, e.y), g.y), c.y);
        b.width = Math.max(Math.max(Math.max(f.x, e.x), g.x), c.x) - b.x;
        b.height = Math.max(Math.max(Math.max(f.y, e.y), g.y), c.y) - b.y
    }
    return b
}
function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
function shuffle(a) {
    for (var d = a.length, b, c; 0 < d;) c = Math.floor(Math.random() * d), d--, b = a[d], a[d] = a[c], a[c] = b;
    return a
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend", this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};
(function() {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[d] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }
    var d = "hidden";
    d in document ? document.addEventListener("visibilitychange", a) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (d = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function CTextButton(a, d, b, c, f, e, g) {
    var k, l, h;
    this._init = function(a, b, c, d, e, f, g) {
        k = [];
        l = [];
        var y = createBitmap(c),
            q = Math.ceil(g / 20),
            v = new createjs.Text(d, "bold " + g + "px " + e, "#000000");
        v.textAlign = "center";
        v.textBaseline = "alphabetic";
        var z = v.getBounds();
        v.x = c.width / 2 + q;
        v.y = Math.floor(c.height / 2) + z.height / 3 + q;
        d = new createjs.Text(d, "bold " + g + "px " + e, f);
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        z = d.getBounds();
        d.x = c.width / 2;
        d.y = Math.floor(c.height / 2) + z.height / 3;
        h = new createjs.Container;
        h.x = a;
        h.y = b;
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        h.addChild(y, v, d);
        s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown");
        h.off("pressup");
        s_oStage.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this._initListener = function() {
        oParent = this;
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        k[a] = b;
        l[a] = c
    };
    this.buttonRelease = function() {
        h.scaleX = 1;
        h.scaleY = 1;
        k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(l[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        h.scaleX = .9;
        h.scaleY = .9;
        k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(a, d, b, c, f, e, g);
    return this
}

function CScoreText(a, d, b) {
    var c;
    this._init = function(a, b, d) {
        c = new createjs.Text("00000", "bold 30px ComicSansMS-Bold", "#ffffff");
        c.textAlign = "right";
        c.text = a;
        c.x = b;
        c.y = d;
        c.alpha = 0;
        c.shadow = new createjs.Shadow("#000000", 2, 2, 2);
        s_oStage.addChild(c);
        var k = this;
        createjs.Tween.get(c).to({
            alpha: 1
        }, 400, createjs.Ease.quadIn).call(function() {
            k.moveUp()
        })
    };
    this.moveUp = function() {
        var a = c.y - 100,
            b = this;
        createjs.Tween.get(c).to({
            y: a
        }, 1E3, createjs.Ease.sineIn).call(function() {
            b.unload()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(c)
    };
    this._init(a, d, b)
}

function CScope() {
    var a, d, b, c, f = !1,
        e = !1,
        g = !1,
        k = !1,
        l, h, p, u;
    this._init = function() {
        a = 88;
        d = 87.5;
        h = l = 0;
        var e = s_oSpriteLibrary.getSprite("scope");
        b = createBitmap(e);
        b.x = CANVAS_WIDTH / 2 - a;
        b.y = CANVAS_HEIGHT / 2 - d;
        s_oStage.addChild(b);
        e = {
            images: [s_oSpriteLibrary.getSprite("tap_shot")],
            frames: {
                width: 200,
                height: 200,
                regX: 100,
                regY: 100
            },
            animations: {
                show: [0, 19, "hide"],
                hide: [20, 21]
            }
        };
        e = new createjs.SpriteSheet(e);
        c = createSprite(e, "hide", 100, 100, 200, 200);
        c.addEventListener("animationend", this.onAnimationEnd);
        c.stop();
        c.visible = !1;
        s_oStage.addChild(c)
    };
    this.unload = function() {
        c.removeEventListener("animationend", oParent.onAnimationEnd)
    };
    this.resetAllDirection = function() {
        k = g = e = f = !1
    };
    this.onAnimationEnd = function() {
        c.visible = !1
    };
    this.playShot = function() {
        c.x = b.x + a;
        c.y = b.y + d;
        c.visible = !0;
        c.gotoAndPlay("show");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("shot")
    };
    this._checkBoundary = function() {
        b.x + a > CANVAS_WIDTH && (b.x = CANVAS_WIDTH - a);
        0 > b.x + a && (b.x = -a);
        b.y + d > CANVAS_HEIGHT && (b.y = CANVAS_HEIGHT - d);
        0 > b.y + d && (b.y = -d)
    };
    this.bullsEye = function() {
        p = b.x + a;
        u = b.y + d;
        return {
            x: p,
            y: u
        }
    };
    this.upStop = function() {
        g = !1
    };
    this.downStop = function() {
        k = !1
    };
    this.leftStop = function() {
        f = !1
    };
    this.rightStop = function() {
        e = !1
    };
    this.moveLeft = function() {
        f = !0
    };
    this.moveRight = function() {
        e = !0
    };
    this.moveUp = function() {
        g = !0
    };
    this.moveDown = function() {
        k = !0
    };
    this.getSprite = function() {
        return b
    };
    this.update = function() {
        e && g ? (l += SCOPE_ACCELERATION, h -= SCOPE_ACCELERATION) : e && k ? (l += SCOPE_ACCELERATION, h += SCOPE_ACCELERATION) : f && k ? (l -= SCOPE_ACCELERATION, h += SCOPE_ACCELERATION) : f && g ? (l -= SCOPE_ACCELERATION, h -= SCOPE_ACCELERATION) : f ? l -= SCOPE_ACCELERATION : e ? l += SCOPE_ACCELERATION : g ? h -= SCOPE_ACCELERATION : k && (h += SCOPE_ACCELERATION);
        b.x += l;
        b.y += h;
        l *= SCOPE_FRICTION;
        h *= SCOPE_FRICTION;
        l > MAX_SCOPE_SPEED && (l = MAX_SCOPE_SPEED);
        l < -MAX_SCOPE_SPEED && (l = -MAX_SCOPE_SPEED);
        h > MAX_SCOPE_SPEED && (h = MAX_SCOPE_SPEED);
        h < -MAX_SCOPE_SPEED && (h = -MAX_SCOPE_SPEED);.2 > Math.abs(l) && (l = 0);.2 > Math.abs(h) && (h = 0);
        this._checkBoundary()
    };
    this._init()
}

function CPreloader() {
    var a;
    this._init = function() {
        this._onAllPreloaderImagesLoaded()
    };
    this._onPreloaderImagesLoaded = function() {};
    this._onAllPreloaderImagesLoaded = function() {
        a = new createjs.Text("", "bold 22px Arial center", "#ffffff");
        a.x = CANVAS_WIDTH / 2 - 40;
        a.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(a)
    };
    this.unload = function() {
        s_oStage.removeChild(a)
    };
    this.refreshLoader = function(d) {
        a.text = d + "%"
    };
    this._init()
}

function CMenu() {
    var a, d, b, c;
    this._init = function() {
        a = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(a);
        var f = s_oSpriteLibrary.getSprite("but_play");
        d = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 80, f, TEXT_PLAY, "walibi0615bold", "#ffffff", 40);
        d.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        var e, f = s_oSpriteLibrary.getSprite("but_exit");
        _oButExit = new CGfxButton(CANVAS_WIDTH - f.height / 2 - 10, f.height / 2 + 10, f, !0);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        e = CANVAS_WIDTH - f.width / 2 - 80;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) f = s_oSpriteLibrary.getSprite("audio_icon"), c = new CToggle(e, 10 + f.height / 2, f, s_bAudioActive), c.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), s_oSoundTrack.setVolume(1);
        b = new createjs.Shape;
        b.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(b);
        createjs.Tween.get(b).to({
            alpha: 0
        }, 1E3).call(function() {
            b.visible = !1
        })
    };
    this.unload = function() {
        d.unload();
        d = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c.unload(), c = null;
        s_oStage.removeChild(a);
        a = null
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onButPlayRelease = function() {
        this.unload();
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click");
        s_oMain.gotoGame()
    };
    this._init()
}

function CMain(a) {
    var d, b = 0,
        c = 0,
        f = STATE_LOADING,
        e, g, k;
    this.initContainer = function() {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = false;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && (s_oStage.enableMouseOver(20), $("body").on("contextmenu", "#canvas", function(a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.setFPS(30);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        s_oSpriteLibrary = new CSpriteLibrary;
        g = new CPreloader;
        this._loadImages();
        d = !0
    };
    this.soundLoaded = function() {
        b++;
        if (b === c) {
            g.unload();
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrack = createjs.Sound.play("soundtrack", {
                loop: 100
            });
            this.gotoMenu()
        }
    };
    this._initSounds = function() {
        createjs.Sound.initializeDefaultPlugins() &&
        (0 < navigator.userAgent.indexOf("Opera") || 0 < navigator.userAgent.indexOf("OPR") ? (createjs.Sound.alternateExtensions = ["m4a"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("../othergame/sounds/ds_duck_hit.ogg", "duck_hit", 5), createjs.Sound.registerSound("../othergame/sounds/ds_duck_intro.ogg", "duck_intro", 5), createjs.Sound.registerSound("../othergame/sounds/ds_game_over.ogg", "game_over", 5), createjs.Sound.registerSound("../othergame/sounds/ds_no_bullets.ogg", "click"), createjs.Sound.registerSound("../othergame/sounds/ds_shot.ogg", "shot"), createjs.Sound.registerSound("../othergame/sounds/ds_soundtrack.ogg", "soundtrack")) : (createjs.Sound.alternateExtensions = ["ogg"], createjs.Sound.addEventListener("fileload", createjs.proxy(this.soundLoaded, this)), createjs.Sound.registerSound("../othergame/sounds/ds_duck_hit.m4a", "duck_hit", 5), createjs.Sound.registerSound("../othergame/sounds/ds_duck_intro.m4a", "duck_intro", 5), createjs.Sound.registerSound("../othergame/sounds/ds_game_over.m4a", "game_over", 5), createjs.Sound.registerSound("../othergame/sounds/ds_no_bullets.m4a", "click"), createjs.Sound.registerSound("../othergame/sounds/ds_shot.m4a", "shot"), createjs.Sound.registerSound("../othergame/sounds/ds_soundtrack.m4a", "soundtrack")), c += 6)
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "../othergame/sprites/but_play.png");
        s_oSpriteLibrary.addSprite("but_exit", "../othergame/sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("bg_menu", "../othergame/sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "../othergame/sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("but_left", "../othergame/sprites/but_left.png");
        s_oSpriteLibrary.addSprite("but_right", "../othergame/sprites/but_right.png");
        s_oSpriteLibrary.addSprite("but_up", "../othergame/sprites/but_up.png");
        s_oSpriteLibrary.addSprite("but_down", "../othergame/sprites/but_down.png");
        s_oSpriteLibrary.addSprite("but_upleft", "../othergame/sprites/but_up_left.png");
        s_oSpriteLibrary.addSprite("but_downleft", "../othergame/sprites/but_down_left.png");
        s_oSpriteLibrary.addSprite("but_upright", "../othergame/sprites/but_up_right.png");
        s_oSpriteLibrary.addSprite("but_downright", "../othergame/sprites/but_down_right.png");
        s_oSpriteLibrary.addSprite("shot_panel", "../othergame/sprites/shot_panel.png");
        s_oSpriteLibrary.addSprite("hit_panel", "../othergame/sprites/hit_panel.png");
        s_oSpriteLibrary.addSprite("bullet", "../othergame/sprites/bullet.png");
        s_oSpriteLibrary.addSprite("tap_shot", "../othergame/sprites/tap_shot.png");
        s_oSpriteLibrary.addSprite("hit_icon", "../othergame/sprites/hit_icon.png");
        s_oSpriteLibrary.addSprite("audio_icon", "../othergame/sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("bg_game", "../othergame/sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("grass", "../othergame/sprites/grass.png");
        s_oSpriteLibrary.addSprite("tree", "../othergame/sprites/tree.png");
        s_oSpriteLibrary.addSprite("scope", "../othergame/sprites/gun_sight.png");
        s_oSpriteLibrary.addSprite("tap_shot", "../othergame/sprites/tap_shot.png");
        s_oSpriteLibrary.addSprite("duck_1", "../othergame/sprites/duck_1.png");
        s_oSpriteLibrary.addSprite("duck_2", "../othergame/sprites/duck_2.png");
        s_oSpriteLibrary.addSprite("duck_3", "../othergame/sprites/duck_3.png");
        s_oSpriteLibrary.addSprite("duck_4", "../othergame/sprites/duck_4.png");
        s_oSpriteLibrary.addSprite("target", "../othergame/sprites/target.png");
        s_oSpriteLibrary.addSprite("life_panel", "../othergame/sprites/life_panel.png");
        s_oSpriteLibrary.addSprite("help_panel_desktop", "../othergame/sprites/help_panel_desktop.png");
        s_oSpriteLibrary.addSprite("help_panel_mobile", "../othergame/sprites/help_panel_mobile.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / c * 100));
        if (b === c) {
            g.unload();
            if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) s_oSoundTrack = createjs.Sound.play("soundtrack", {
                loop: 100
            });
            this.gotoMenu()
        }
    };
    this._onAllImagesLoaded = function() {};
    this.onAllPreloaderImagesLoaded = function() {
        this._loadImages()
    };
    this.gotoMenu = function() {
        new CMenu;
        f = STATE_MENU
    };
    this.gotoGame = function() {
        k = new CGame(e);
        f = STATE_GAME;
        $(s_oMain).trigger("game_start")
    };
    this.gotoHelp = function() {
        new CHelp;
        f = STATE_HELP
    };
    this.stopUpdate = function() {
        d = !1
    };
    this.startUpdate = function() {
        d = !0
    };
    this._update = function(a) {
        if (!1 !== d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            f === STATE_GAME && k.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    e = a;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack, s_oCanvas;
TEXT_GAMEOVER = "GAME OVER";
TEXT_SCORE = "SCORE";
TEXT_PLAY = "PLAY";
TEXT_HELP1 = "USE ARROW BUTTONS OR KEYS TO MOVE THE SCOPE";
TEXT_HELP2 = "CLICK SPACEBAR OR FIRE BUTTON TO SHOOT";
TEXT_HELP3 = "YOU HAVE 3 BULLETS TO HIT THE DUCKS, DON'T LET IT FLY AWAY OR YOU WILL LOSE A LIFE";
TEXT_HELP_MOB1 = "USE ARROW BUTTONS TO MOVE THE SCOPE";
TEXT_HELP_MOB2 = "PRESS FIRE BUTTON TO SHOOT";
TEXT_SHOOT = "SHOOT";
TEXT_HIT = "HIT";
TEXT_BONUS = "BONUS SCORE";
TEXT_SCORE = "SCORE";
TEXT_NOAMMO = "NO AMMO";
TEXT_MULTIPLY = "MULTIPY";

function CInterface() {
    var a, d, b, c, f, e, g, k, l, h, p, u, n, r, t, x, B, y;
    this._init = function() {
        a = 0;
        p = [];
        y = createBitmap(s_oSpriteLibrary.getSprite("life_panel"));
        y.x = 770;
        y.y = 600;
        s_oStage.addChild(y);
        _oButShot = new CGfxButton(897, 688, s_oSpriteLibrary.getSprite("shot_panel"), !0);
        _oButShot.addEventListener(ON_MOUSE_UP, this._onShot, this);
        b = createBitmap(s_oSpriteLibrary.getSprite("hit_panel"));
        b.x = 218;
        b.y = 643;
        s_oStage.addChild(b);
        x = new createjs.Text(TEXT_HIT, "bold 30px walibi0615bold", "#ffffff");
        x.x = 238;
        x.y = 663;
        s_oStage.addChild(x);
        r = new createjs.Text(TEXT_BONUS, "bold 22px walibi0615bold", "#ffffff");
        r.x = 360;
        r.y = 658;
        s_oStage.addChild(r);
        u = new createjs.Text(TEXT_SCORE, "bold 30px walibi0615bold", "#000");
        u.x = 32;
        u.y = 12;
        s_oStage.addChild(u);
        n = new createjs.Text(TEXT_SCORE, "bold 30px walibi0615bold", "#ffffff");
        n.x = 30;
        n.y = 10;
        s_oStage.addChild(n);
        g = new createjs.Text(TEXT_NOAMMO, "bold 30px walibi0615bold", "#ffffff");
        g.x = 800;
        g.y = 670;
        g.lineWidth = 60;
        g.shadow = new createjs.Shadow("#000", 2, 2, 2);
        g.visible = !1;
        s_oStage.addChild(g);
        k = new createjs.Text("X " + PLAYER_LIVES, "bold 22px walibi0615bold", "#ffffff");
        k.x = 895;
        k.y = 630;
        k.textAlign = "right";
        k.textBaseline = "alphabetic";
        s_oStage.addChild(k);
        f = new createjs.Text("0", "bold 30px walibi0615bold", "#000");
        f.x = 172;
        f.y = 12;
        s_oStage.addChild(f);
        c = new createjs.Text("0", "bold 30px walibi0615bold", "#ffffff");
        c.x = 170;
        c.y = 10;
        s_oStage.addChild(c);
        e = new createjs.Text("", "bold 30px walibi0615bold", "yellow");
        e.textAlign = "center";
        e.shadow = new createjs.Shadow("#000", 2, 2, 2);
        t = new createjs.Text("0000", "bold 30px ComicSansMS-Bold", "#ffffff");
        t.x = 660;
        t.y = 682;
        t.textAlign = "right";
        t.textBaseline = "alphabetic";
        s_oStage.addChild(t);
        l = [];
        for (var q = s_oSpriteLibrary.getSprite("hit_icon"), v = new createjs.SpriteSheet({
            images: [q],
            frames: {
                width: 51,
                height: 43
            },
            animations: {
                nohit: [0],
                hit: [1]
            }
        }), z = 230, q = 0; 9 > q; q++) {
            var w = createSprite(v, "nohit", 0, 0, 51, 43);
            w.x = z;
            w.y = 710;
            w.visible = !1;
            s_oStage.addChild(w);
            l[q] = w;
            z += 58
        }
        h = [];
        v = 800;
        for (q = 0; q < NUM_BULLETS; q++) w = createBitmap(s_oSpriteLibrary.getSprite("bullet")), w.x = v, w.y = 680, s_oStage.addChild(w), h[q] = w, v += 30;
        q = s_oSpriteLibrary.getSprite("but_exit");
        d = new CGfxButton(CANVAS_WIDTH - q.height / 2 - 10, q.height / 2 + 10, q, !0);
        d.addEventListener(ON_MOUSE_UP, this._onExit, this);
        w = CANVAS_WIDTH - q.width / 2 - 80;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), B = new CToggle(w, 10 + q.height / 2, q, s_bAudioActive), B.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this)
    };
    this.unload = function() {
        d.unload();
        d = null;
        _oButShot.unload();
        _oButShot = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) B.unload(), B = null
    };
    this.refreshScore = function(a) {
        f.text = a;
        c.text = a
    };
    this.refreshTime = function(a) {
        t.text = a
    };
    this.viewMultiScore = function(a) {
        e.text = TEXT_MULTIPLY + " X" + a;
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        s_oStage.addChild(e)
    };
    this.cleanScore = function() {
        s_oStage.removeChild(e)
    };
    this.refreshLife = function(a) {
        k.text = "X " + a
    };
    this.refreshBullets = function(a) {
        h[a].visible = !1
    };
    this.reloadBullets = function(a) {
        for (var b = 0; b < a; b++) h[b].visible = !0
    };
    this.noAmmo = function() {
        g.visible = !0;
        g.alpha = 1;
        createjs.Tween.get(g, {
            override: !0
        }).to({
            alpha: 0
        }, 1E3, createjs.Ease.quadIn)
    };
    this.noAmmoDelete = function() {
        g.visible = !1;
        createjs.Tween.removeTweens(g)
    };
    this.setHit = function() {
        p.push(!0);
        this._setVisibleDuck()
    };
    this.setNoHit = function() {
        p.push(!1);
        this._setVisibleDuck()
    };
    this._setVisibleDuck = function() {
        if (8 < a) {
            for (var b = 0; 8 > b; b++)!0 === p[a - 8 + b] ? l[b].gotoAndPlay("hit") : l[b].gotoAndPlay("nohit");
            !0 === p[a] ? l[8].gotoAndPlay("hit") : l[8].gotoAndPlay("nohit")
        } else!0 === p[a] ? (l[a].gotoAndPlay("hit"), l[a].visible = !0) : !1 === p[a] && (l[a].gotoAndPlay("nohit"), l[a].visible = !0);
        a++
    };
    this._onKeyUpReleased = function() {
        s_oGame.onKeyUpReleased()
    };
    this._onKeyDownReleased = function() {
        s_oGame.onKeyDownReleased()
    };
    this._onKeyRightReleased = function() {
        s_oGame.onKeyRightReleased()
    };
    this._onKeyLeftReleased = function() {
        s_oGame.onKeyLeftReleased()
    };
    this._onLeftPressed = function() {
        s_oGame.onLeft()
    };
    this._onRightPressed = function() {
        s_oGame.onRight()
    };
    this._onDownPressed = function() {
        s_oGame.onDown()
    };
    this._onUpPressed = function() {
        s_oGame.onUp()
    };
    this._onShot = function() {
        s_oGame.onShot()
    };
    this.onExitFromHelp = function() {
        (void 0).unload()
    };
    this._onAudioToggle = function() {
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        s_oGame.onExit()
    };
    this._init();
    return this
}

function CHelpPanel() {
    var a, d, b, c, f, e, g, k, l, h;
    this._init = function() {
        var p;
        p = s_bMobile ? s_oSpriteLibrary.getSprite("help_panel_mobile") : s_oSpriteLibrary.getSprite("help_panel_desktop");
        l = createBitmap(p);
        s_oStage.addChild(l);
        !1 === s_bMobile ? (g = TEXT_HELP1, k = TEXT_HELP2) : (g = TEXT_HELP_MOB1, k = TEXT_HELP_MOB2);
        d = new createjs.Text(g, "bold 22px walibi0615bold", "#000000");
        d.textAlign = "left";
        d.lineWidth = 360;
        d.x = 230;
        d.y = 212;
        a = new createjs.Text(g, "bold 22px walibi0615bold", "#ffffff");
        a.textAlign = "left";
        a.lineWidth = 360;
        a.x = 232;
        a.y = 210;
        c = new createjs.Text(k, "bold 22px walibi0615bold", "#000000");
        c.textAlign = "left";
        c.lineWidth = 300;
        c.x = 230;
        c.y = 342;
        b = new createjs.Text(k, "bold 22px walibi0615bold", "#ffffff");
        b.textAlign = "left";
        b.lineWidth = 300;
        b.x = 232;
        b.y = 340;
        e = new createjs.Text(TEXT_HELP3, "bold 22px walibi0615bold", "#000000");
        e.textAlign = "left";
        e.lineWidth = 440;
        e.x = 230;
        e.y = 462;
        f = new createjs.Text(TEXT_HELP3, "bold 22px walibi0615bold", "#ffffff");
        f.textAlign = "left";
        f.lineWidth = 440;
        f.x = 232;
        f.y = 460;
        h = new createjs.Container;
        h.addChild(l, d, a, c, b, e, f);
        s_oStage.addChild(h);
        p = createBitmap(s_oSpriteLibrary.getSprite("bullet"));
        p.x = 700;
        p.y = 460;
        h.addChild(p);
        p = createBitmap(s_oSpriteLibrary.getSprite("bullet"));
        p.x = 730;
        p.y = 460;
        h.addChild(p);
        p = createBitmap(s_oSpriteLibrary.getSprite("bullet"));
        p.x = 760;
        p.y = 460;
        h.addChild(p);
        var u = this;
        h.on("pressup", function() {
            u._onExitHelp()
        })
    };
    this.unload = function() {
        s_oStage.removeChild(h);
        var a = this;
        h.off("pressup", function() {
            a._onExitHelp()
        })
    };
    this._onExitHelp = function() {
        this.unload();
        s_oGame._onExitHelp()
    };
    this._init()
}

function CGfxButton(a, d, b) {
    var c, f, e;
    this._init = function(a, b, d) {
        c = [];
        f = [];
        e = createBitmap(d);
        e.x = a;
        e.y = b;
        e.regX = d.width / 2;
        e.regY = d.height / 2;
        s_oStage.addChild(e);
        this._initListener()
    };
    this.unload = function() {
        e.off("mousedown", this.buttonDown);
        e.off("pressup", this.buttonRelease);
        s_oStage.removeChild(e)
    };
    this.setVisible = function(a) {
        e.visible = a
    };
    this._initListener = function() {
        e.on("mousedown", this.buttonDown);
        e.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, d) {
        c[a] = b;
        f[a] = d
    };
    this.buttonRelease = function() {
        e.scaleX = 1;
        e.scaleY = 1;
        c[ON_MOUSE_UP] && c[ON_MOUSE_UP].call(f[ON_MOUSE_UP])
    };
    this.buttonDown = function() {
        e.scaleX = .9;
        e.scaleY = .9;
        c[ON_MOUSE_DOWN] && c[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])
    };
    this.setPosition = function(a, b) {
        e.x = a;
        e.y = b
    };
    this.setX = function(a) {
        e.x = a
    };
    this.setY = function(a) {
        e.y = a
    };
    this.getButtonImage = function() {
        return e
    };
    this.getX = function() {
        return e.x
    };
    this.getY = function() {
        return e.y
    };
    this._init(a, d, b);
    return this
}

function CGame(a) {
    function d(a) {
        if (32 === a.keyCode && !0 === B) s_oGame.onShot();
        else 37 === a.keyCode ? m.leftStop() : 38 === a.keyCode ? m.upStop() : 39 === a.keyCode ? m.rightStop() : 40 === a.keyCode && m.downStop()
    }
    function b(a) {
        a || (a = window.event);
        switch (a.keyCode) {
            case 37:
                s_oGame.onLeft();
                break;
            case 38:
                s_oGame.onUp();
                break;
            case 39:
                s_oGame.onRight();
                break;
            case 40:
                s_oGame.onDown()
        }
    }
    var c, f, e, g, k, l, h, p, u, n, r, t, x = !1,
        B = !1,
        y, q, v, z, w, C, L, A, M = null,
        N, O, P, m, D, E, F, G, H, I, J, K;
    this._init = function() {
        e = c = 0;
        g = BONUS_TIME;
        f = NUM_BULLETS;
        k = 0;
        l = PLAYER_LIVES;
        p = u = h = 0;
        y = !1;
        v = [];
        z = [];
        w = [];
        C = [];
        L = [];
        A = new CInterface;
        var a = createBitmap(s_oSpriteLibrary.getSprite("bg_game"));
        s_oStage.addChild(a);
        a = s_oSpriteLibrary.getSprite("tree");
        a = new createBitmap(a);
        O = new createjs.Container;
        O.y = 30;
        s_oStage.addChild(O);
        O.addChild(a);
        P = new createjs.Container;
        s_oStage.addChild(P);
        this._initDucks();
        this._initPos();
        this.initDuckObj();
        var a = s_oSpriteLibrary.getSprite("grass"),
            n = createBitmap(a);
        N = new createjs.Container;
        N.y = CANVAS_HEIGHT - a.height;
        s_oStage.addChild(N);
        N.addChild(n);
        m = new CScope;
        A = new CInterface;
        D = createBitmap(s_oSpriteLibrary.getSprite("but_up"));
        D.x = 70;
        D.y = 550;
        s_oStage.addChild(D);
        E = createBitmap(s_oSpriteLibrary.getSprite("but_down"));
        E.x = 70;
        E.y = 656;
        s_oStage.addChild(E);
        F = createBitmap(s_oSpriteLibrary.getSprite("but_left"));
        F.x = 4;
        F.y = 615;
        s_oStage.addChild(F);
        G = createBitmap(s_oSpriteLibrary.getSprite("but_right"));
        G.x = 110;
        G.y = 616;
        s_oStage.addChild(G);
        H = createBitmap(s_oSpriteLibrary.getSprite("but_upright"));
        H.x = 110;
        H.y = 559;
        s_oStage.addChild(H);
        I = createBitmap(s_oSpriteLibrary.getSprite("but_downright"));
        I.x = 110;
        I.y = 656;
        s_oStage.addChild(I);
        J = createBitmap(s_oSpriteLibrary.getSprite("but_upleft"));
        J.x = 14;
        J.y = 559;
        s_oStage.addChild(J);
        K = createBitmap(s_oSpriteLibrary.getSprite("but_downleft"));
        K.x = 14;
        K.y = 656;
        s_oStage.addChild(K);
        CHelpPanel();
        s_bMobile ? window.navigator.msPointerEnabled ? (t = 0, s_oCanvas.addEventListener("MSPointerDown", this.onTouchStartMS, !1), s_oCanvas.addEventListener("MSPointerMove", this.onTouchMoveMS, !1), s_oCanvas.addEventListener("MSPointerUp", this.onTouchEndMS, !1)) : (s_oCanvas.addEventListener("touchstart", this.onTouchStart, !1), s_oCanvas.addEventListener("touchmove", this.onTouchMove, !1), s_oCanvas.addEventListener("touchend", this.onTouchEnd, !1)) : (document.onkeydown = b, document.onkeyup = d, s_oStage.addEventListener("stagemousedown", this.onMouseStart, !1), s_oStage.addEventListener("stagemousemove", this.onMouseMove, !1), s_oStage.addEventListener("stagemouseup", this.onMouseEnd, !1));
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oSoundTrack.setVolume(.5)
    };
    this.onMouseStart = function(a) {
        a = a || window.event;
        n = parseInt(a.stageX);
        r = parseInt(a.stageY);
        y = !0
    };
    this.onMouseMove = function(a) {
        !1 !== y && (n = parseInt(a.stageX), r = parseInt(a.stageY))
    };
    this.onMouseEnd = function() {
        y = !1;
        m.resetAllDirection()
    };
    this.onTouchStart = function(a) {
        y || (n = parseInt((a.touches[0].pageX - s_oCanvasLeft) / s_iScaleFactor), r = parseInt((a.touches[0].pageY - s_oCanvasTop) / s_iScaleFactor), y = !0)
    };
    this.onTouchMove = function(a) {
        a.preventDefault();
        n = parseInt((a.touches[0].pageX - s_oCanvasLeft) / s_iScaleFactor);
        r = parseInt((a.touches[0].pageY - s_oCanvasTop) / s_iScaleFactor)
    };
    this.onTouchEnd = function(a) {
        0 === a.touches.length && (y = !1, m.resetAllDirection())
    };
    this.onTouchStartMS = function(a) {
        t++;
        1 < t || (n = parseInt(((a.pageX || a.targetTouches[0].pageX) - s_oCanvasLeft) / s_iScaleFactor), r = parseInt(((a.pageY || a.targetTouches[0].pageY) - s_oCanvasTop) / s_iScaleFactor), y = !0)
    };
    this.onTouchMoveMS = function(a) {
        if (!window.navigator.msPointerEnabled || a.isPrimary) a.preventDefault(), n = parseInt(((a.pageX || a.targetTouches[0].pageX) - s_oCanvasLeft) / s_iScaleFactor), r = parseInt(((a.pageY || a.targetTouches[0].pageY) - s_oCanvasTop) / s_iScaleFactor)
    };
    this.onTouchEndMS = function(a) {
        t--;
        0 === t && (y = !1, m.resetAllDirection())
    };
    this.unload = function() {
        B = !1;
        m.unload();
        A.unload();
        null !== M && M.unload();
        for (var a = 0; a < q.length; a++) q[a].unload();
        s_oStage.removeAllChildren()
    };
    this._initDucks = function() {
        for (var a = 0; a < DUCK_ON_SCREEN.length; a++) u < DUCK_ON_SCREEN[a] && (u = DUCK_ON_SCREEN[a]);
        q = [];
        for (a = 0; a < u; a++) q.push(new CDuck(P))
    };
    this._initPos = function() {
        for (var a = 51; a < CANVAS_WIDTH;) v.push(new createjs.Point(a, 565)), a += CANVAS_WIDTH / 20;
        for (a = 0; a < v.length; a++) C.push(a);
        z[0] = new createjs.Point(-120, 400);
        z[1] = new createjs.Point(-120, 200);
        z[2] = new createjs.Point(250, -120);
        z[3] = new createjs.Point(500, -120);
        w[0] = new createjs.Point(CANVAS_WIDTH + 120, 400);
        w[1] = new createjs.Point(CANVAS_WIDTH + 120, 200);
        w[2] = new createjs.Point(1E3, -120);
        w[3] = new createjs.Point(750, -120);
        for (a = 0; a < z.length; a++) L.push(a)
    };
    this.initDuckObj = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("duck_intro");
        if (h === DUCK_ON_SCREEN.length) for (var a = h = 0; a < q.length; a++) q[a].increaseSpeed();
        shuffle(C);
        shuffle(L);
        for (a = 0; a < DUCK_ON_SCREEN[h]; a++) C[a] < v.length / 2 ? q[a].reset(v[C[a]], w[L[a]]) : q[a].reset(v[C[a]], z[L[a]]), e++, q[a].show();
        k = DUCK_ON_SCREEN[h];
        h++;
        this._refreshScreen()
    };
    this.checkDuck = function() {
        k--;
        0 === k && this.initDuckObj()
    };
    this.onKeyUpReleased = function() {
        m.upStop()
    };
    this.onKeyDownReleased = function() {
        m.downStop()
    };
    this.onKeyLeftReleased = function() {
        m.leftStop()
    };
    this.onKeyRightReleased = function() {
        m.rightStop()
    };
    this.onLeft = function() {
        m.moveLeft()
    };
    this.onRight = function() {
        m.moveRight()
    };
    this.onUp = function() {
        m.moveUp()
    };
    this.onDown = function() {
        m.moveDown()
    };
    this.onShot = function() {
        0 === f ? (A.noAmmo(), !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("click")) : (f--, A.refreshBullets(f), m.playShot(), x = !0)
    };
    this._reloadRifle = function() {
        f = NUM_BULLETS;
        A.reloadBullets(f)
    };
    this._showTime = function() {
        A.refreshTime(g)
    };
    this._checkIfDuckHit = function(a) {
        if (m.bullsEye().x > a.target().x && m.bullsEye().x < a.target().x + a.target().w && m.bullsEye().y > a.target().y && m.bullsEye().y < a.target().y + a.target().h) return !0
    };
    this.checkCollision = function(a) {
        if (this._checkIfDuckHit(a) && x && a.isVisible() && !a.isHit()) {
            a.onHit();
            var b = SCORE_HIT + g;
            p++;
            1 < p && (b *= p, A.viewMultiScore(p));
            p = 0;
            c += b;
            new CScoreText(b, a.getPos().x, a.getPos().y);
            A.refreshScore(c);
            !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("duck_hit")
        }
    };
    this.setHitPane = function() {
        A.setHit()
    };
    this.setNoHitPane = function() {
        A.setNoHit()
    };
    this.subtractLife = function() {
        l--;
        0 === l && (this.gameOver(), B = !1);
        A.refreshLife(l)
    };
    this._refreshScreen = function() {
        this._reloadRifle();
        g = BONUS_TIME;
        A.cleanScore();
        A.noAmmoDelete()
    };
    this.onExit = function() {
        this.unload();
        s_oMain.gotoMenu();
        $(s_oMain).trigger("restart")
    };
    this._onExitHelp = function() {
        B = !0
    };
    this.gameOver = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || createjs.Sound.play("game_over");
        M = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        M.show(c)
    };
    this.checkController = function() {
        var a = H.globalToLocal(n, r);
        H.hitTest(a.x, a.y) ? (m.moveUp(), m.moveRight(), m.downStop(), m.leftStop()) : (a = I.globalToLocal(n, r), I.hitTest(a.x, a.y) ? (m.moveDown(), m.moveRight(), m.upStop(), m.leftStop()) : (a = J.globalToLocal(n, r), J.hitTest(a.x, a.y) ? (m.moveUp(), m.moveLeft(), m.downStop(), m.rightStop()) : (a = K.globalToLocal(n, r), K.hitTest(a.x, a.y) ? (m.moveDown(), m.moveLeft(), m.upStop(), m.rightStop()) : (a = D.globalToLocal(n, r), D.hitTest(a.x, a.y) ? (m.moveUp(), m.downStop(), m.rightStop(), m.leftStop()) : (a = E.globalToLocal(n, r), E.hitTest(a.x, a.y) ? (m.moveDown(), m.upStop(), m.rightStop(), m.leftStop()) : (a = F.globalToLocal(n, r), F.hitTest(a.x, a.y) ? (m.moveLeft(), m.downStop(), m.rightStop(), m.upStop()) : (a = G.globalToLocal(n, r), G.hitTest(a.x, a.y) ? (m.moveRight(), m.downStop(), m.upStop(), m.leftStop()) : m.resetAllDirection())))))))
    };
    this.update = function() {
        if (B) {
            y && this.checkController();
            for (var a = 0; a < u; a++) q[a].update(), this.checkCollision(q[a]);
            x = !1;
            m.update();
            g -= s_iTimeElaps;
            0 > g && (g = 0);
            this._showTime()
        }
    };
    s_oGame = this;
    SCOPE_ACCELERATION = a.scope_accelleration;
    SCOPE_FRICTION = a.scope_friction;
    MAX_SCOPE_SPEED = a.max_scope_speed;
    NUM_BULLETS = a.num_bullets;
    SCORE_HIT = a.hit_score;
    BONUS_TIME = a.bonus_time;
    PLAYER_LIVES = a.lives;
    DUCK_INCREASE_SPEED = a.duck_increase_speed;
    DUCK_ON_SCREEN = a.duck_occurence;
    this._init()
}
var s_oGame;

function CEndPanel(a) {
    var d, b, c, f, e, g;
    this._init = function(a) {
        d = createBitmap(a);
        e = new createjs.Text("", "bold 60px walibi0615bold", "#000");
        e.x = CANVAS_WIDTH / 2 + 1;
        e.y = CANVAS_HEIGHT / 2 - 160;
        e.textAlign = "center";
        f = new createjs.Text("", "bold 60px walibi0615bold", "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = CANVAS_HEIGHT / 2 - 162;
        f.textAlign = "center";
        b = new createjs.Text("", "bold 40px walibi0615bold", "#000");
        b.x = CANVAS_WIDTH / 2 + 1;
        b.y = CANVAS_HEIGHT / 2 + 50;
        b.textAlign = "center";
        c = new createjs.Text("", "bold 40px walibi0615bold", "#ffffff");
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT / 2 + 52;
        c.textAlign = "center";
        g = new createjs.Container;
        g.alpha = 0;
        g.visible = !1;
        g.addChild(d, b, c, e, f);
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.off("mousedown", this._onExit)
    };
    this._initListener = function() {
        g.on("mousedown", this._onExit)
    };
    this.show = function(a) {
        createjs.Sound.play("game_over");
        e.text = TEXT_GAMEOVER;
        f.text = TEXT_GAMEOVER;
        b.text = TEXT_SCORE + ": " + a;
        c.text = TEXT_SCORE + ": " + a;
        g.visible = !0;
        var d = this;
        createjs.Tween.get(g).to({
            alpha: 1
        }, 500).call(function() {
            d._initListener()
        });
        $(s_oMain).trigger("save_score", a)
    };
    this._onExit = function() {
        g.off("mousedown", this._onExit);
        s_oStage.removeChild(g);
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CDuck(a) {
    var d, b, c, f, e, g, k, l, h, p, u, n, r, t, x;
    this._init = function(a) {
        b = 0;
        c = DUCK_START_SPEED;
        f = 200;
        d = 102;
        g = 300;
        l = !1;
        p = [];
        u = a;
        a = {
            images: [s_oSpriteLibrary.getSprite("duck_1")],
            frames: {
                width: 200,
                height: 204,
                regX: 100,
                regY: 102
            },
            animations: {
                fly: [0, 6, "fly"],
                hit: [7, 15, "hit_stop"],
                hit_stop: [15],
                fall: [16, 44, "fall"]
            }
        };
        var e = {
                images: [s_oSpriteLibrary.getSprite("duck_2")],
                frames: {
                    width: 200,
                    height: 204,
                    regX: 100,
                    regY: 102
                },
                animations: {
                    fly: [0, 6, "fly"],
                    hit: [7, 15, "hit_stop"],
                    hit_stop: [15],
                    fall: [16, 44, "fall"]
                }
            },
            h = {
                images: [s_oSpriteLibrary.getSprite("duck_3")],
                frames: {
                    width: 200,
                    height: 204,
                    regX: 100,
                    regY: 102
                },
                animations: {
                    fly: [0, 6, "fly"],
                    hit: [7, 15, "hit_stop"],
                    hit_stop: [15],
                    fall: [16, 44, "fall"]
                }
            },
            k = {
                images: [s_oSpriteLibrary.getSprite("duck_4")],
                frames: {
                    width: 200,
                    height: 204,
                    regX: 100,
                    regY: 102
                },
                animations: {
                    fly: [0, 6, "fly"],
                    hit: [7, 15, "hit_stop"],
                    hit_stop: [15],
                    fall: [16, 44, "fall"]
                }
            };
        r = new createjs.Rectangle(0, 0, 160, 80);
        p[0] = new createjs.SpriteSheet(a);
        p[1] = new createjs.SpriteSheet(e);
        p[2] = new createjs.SpriteSheet(h);
        p[3] = new createjs.SpriteSheet(k);
        n = createSprite(p[0], "fly", 100, 102, 200, 204);
        n.visible = !1;
        n.stop();
        u.addChild(n)
    };
    this._changeSprite = function() {
        var a = Math.floor(4 * Math.random());
        n.spriteSheet = p[a]
    };
    this._calculateMid = function() {
        var a;
        a = t.x > x.x ? new createjs.Point(t.x + .2 * (t.x - x.x), x.y - d / 2) : new createjs.Point(x.x - .2 * (x.x - t.x), x.y - d / 2);
        h = {
            start: t,
            end: x,
            traj: a
        }
    };
    this._selectInterpolation = function() {
        e = Math.floor(2 * Math.random())
    };
    this.reset = function(a, b) {
        this._changeSprite();
        createjs.Tween.removeTweens(n);
        n.x = a.x;
        n.y = a.y;
        t = a;
        x = b;
        l = !1;
        g = 300;
        this._calculateMid();
        this._selectInterpolation()
    };
    this.increaseSpeed = function() {
        c += DUCK_INCREASE_SPEED
    };
    this.unload = function() {
        u.removeChild(n)
    };
    this.show = function() {
        t.x < CANVAS_WIDTH / 2 && (n.scaleX = -1);
        t.x > CANVAS_WIDTH / 2 && (n.scaleX = 1);
        n.visible = !0;
        n.gotoAndPlay("fly");
        k = !0
    };
    this.unShow = function() {
        n.visible = !1
    };
    this._updateRect = function() {
        r.x = n.x - 80;
        r.y = n.y - 40
    };
    this.target = function() {
        return {
            x: r.x,
            y: r.y,
            w: r.width,
            h: r.height
        }
    };
    this.setVisible = function() {
        n.visible = !0
    };
    this.isVisible = function() {
        return n.visible
    };
    this.onHit = function() {
        n.alpha = 1;
        n.gotoAndPlay("hit");
        b = 0;
        k = l = !0
    };
    this.getSprite = function() {
        return n
    };
    this.getPos = function() {
        return {
            x: n.x,
            y: n.y
        }
    };
    this.isHit = function() {
        return l
    };
    this._updateFly = function() {
        b += c;
        b > f && (b = 0, k = n.visible = !1, s_oGame.setNoHitPane(), s_oGame.checkDuck(), s_oGame.subtractLife());
        var a;
        switch (e) {
            case 0:
                a = easeLinear(b, 0, 1, f);
                break;
            case 1:
                a = easeInSine(b, 0, 1, f)
        }
        a = getTrajectoryPoint(a, h);
        n.x = a.x;
        n.y = a.y;
        this._updateRect()
    };
    this._updateFall = function() {
        createjs.Tween.get(n).to({
            y: CANVAS_HEIGHT
        }, 1E3, createjs.Ease.quadIn).call(function() {
            s_oGame.checkDuck()
        }).call(function() {
            s_oGame.setHitPane()
        })
    };
    this.update = function() {
        if (k) switch (n.currentAnimation) {
            case "fly":
                this._updateFly();
                break;
            case "hit_stop":
                g -= s_iTimeElaps;
                0 > g && (g = 300, n.gotoAndPlay("fall"));
                break;
            case "fall":
                this._updateFall(), k = !1
        }
    };
    this._init(a)
};