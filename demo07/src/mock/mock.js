import Mock from 'mockjs';
Mock.setup({
    timeout: '200-400'
})
Mock.mock('/home',{
    'topicList|6-10': [
        {
            'id': '@increment',
            'title': '@ctitle(2, 5)',
            'imgUrl': '@image(\'32x32\', \'#894FC4\', \'#FFF\', \'png\', \'!\')'
        }
    ],
    'articleList|5-10': [
        {
            'id': '@increment',
            'title': '@ctitle(5, 10)',
            'desc': '@cparagraph(4)',
            'imgUrl': '@image(\'125x100\', \'#894FC4\', \'#FFF\', \'png\', \'!\')'
        }
    ],
    'recommendList|5':[
        {
            'id': '@increment',
            'imgUrl': '@image(\'280x50\', \'#894FC4\', \'#FFF\', \'png\', \'!\')'
        }
    ]
})

Mock.mock(RegExp('/more' + ".*"), 'get',(options) => {
    //console.log(options);
    return {
        'articleList|5': [
            {
                'id': '@increment',
                'title': '@ctitle(5, 10)',
                'desc': '@cparagraph(4)',
                'imgUrl': '@image(\'125x100\', \'#894FC4\', \'#FFF\', \'png\', \'!\')'
            }
        ],
    }
})
Mock.mock(RegExp('/login' + ".*"), 'get',(options) => {
    //console.log(options);
    return {
        'status': true
    }
})