
/*
* 文本截取
* @param text：原始文本
* @param length：保留的长度
* @param appendix：截取后拼接后缀
**/
export default function (text, length, appendix = '...') {
    return length >= text.length ? text : String.prototype.substr.call(text, 0, length) + appendix
}