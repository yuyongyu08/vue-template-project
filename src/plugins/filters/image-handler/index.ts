
/*
* CDN图片裁剪
* @param url：图片url
* @param width：宽度
* @param height：长度
* @param crop：裁剪
**/
export default function (url: string, width: number = 140, height: number = 105, crop: any = 1): string{
    let _url = url;
    if (_url) {
        let _query = (_url.match(/(\?.*$)/) || [''])[0];
        if (_query) {
            _url = _url.replace(_query, '');
        }
    }
    return `${_url}?w=${width}&h=${height}&crop=${crop}`;
}