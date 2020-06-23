import {
    $get,
    $post
} from "@libs/ajax"

export default {
    $list: (data = {}) => {
        return $get('', Object.assign({}, data))
    }
}