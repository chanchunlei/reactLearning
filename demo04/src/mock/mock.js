import Mock from 'mockjs'
Mock.setup({
    timeout: '200 - 400'
})

Mock.mock('/data',{
    'list|6-12': ['@csentence']
})
