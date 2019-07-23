
/*
* CDN图片裁剪
* @param url：图片url
* @param width：宽度
* @param height：长度
* @param crop：裁剪
**/
export default function (url, width = 140, height = 105, crop = 1) {
    let _url = url;
    if (_url) {
        let _query = (_url.match(/(\?.*$)/) || [''])[0];
        if (_query) {
            _url = _url.replace(_query, '');
        }
    }
    return `${_url}?w=${width}&h=${height}&crop=${crop}`;
}