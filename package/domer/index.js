import classer from "./classer";
import checker from "./checker";
import heighter from "./heighter";
import listener from "./listener";
import offseter from "./offseter";
import queryer from "./queryer";
import scroller from "./scroller";

export default { classer, checker, heighter, listener, offseter, queryer, scroller };

// window.innerHeight 各大浏览器表现一致

// clientHeight | scrollHeight | offsetHeight |  offsetTop | scrollTop
// 在非document.body 和 document.documentElement下，各大浏览器的值均一致
// clientHeight : 元素可见高度，包括padding，不包括border，滚动条，必须是块级元素
// scrollHeight : 元素内部可滚动的像素
// offsetHeight : 元素可见高度，包括padding，border，滚动条，也必须是块级元素
// offsetTop : 元素顶部距离父元素的顶部的距离
// scrollTop : 内部的元素被卷起的高度，该值可读也可设置

// 在document.body 和 document.documentElement下
// document.body ( body不能设置 padding和border)
// scrollHeight : 只有chrome会包括内部元素设置的margin属性，其他的均不包括
// clientHeight :
// offsetHeight :
