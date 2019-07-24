import RequestHelper from '../utils/request-helper'

export default class ListApi{
    static getList(){
        return RequestHelper.get('https://easy-mock.com/mock/5d37c826c45d0c70bb9dd9f2/example/house/list')
    }
}