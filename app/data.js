export default {
    nodes: [
        {
            id: 'id0',
            title: 'id0的title',
            result: [
                {
                    id: 'res1',
                    text: 'id0 res1'
                },
                {
                    id: 'res2',
                    text: 'id0 res2'
                },
                {
                    id: 'res3',
                    text: 'id0 res3'
                }
            ]
        },
        {
            id: 'id1',
            title: 'id1的title',
            result: [
                {
                    id: 'res1',
                    text: 'id1 res1'
                },
                {
                    id: 'res2',
                    text: 'id1 res2'
                }
            ]
        },
        {
            id: 'id2',
            title: 'id2的title',
            result: [
                {
                    id: 'res1',
                    text: 'id2 res1'
                },
                {
                    id: 'res2',
                    text: 'id2 res2'
                }
            ]
        },
        {
            id: 'id3',
            title: 'id3的title',
            result: [
                {
                    id: 'res1',
                    text: 'id3 res1'
                },
                {
                    id: 'res2',
                    text: 'id3 res2'
                }
            ]
        },
        {
            id: 'id4',
            title: 'id4的title',
            result: [
                {
                    id: 'res1',
                    text: 'id4 res1'
                },
                {
                    id: 'res2',
                    text: 'id4 res2'
                }
            ]
        },
        {
            id: 'id5',
            title: 'id5的title',
            result: [
                {
                    id: 'res1',
                    text: 'id5 res1'
                },
                {
                    id: 'res2',
                    text: 'id5 res2'
                }
            ]
        }
    ],
    links: [
        {
            title: '1111',
            from: 'id0:res1',
            to: 'id1'
        },
        {
            title: '',
            from: 'id0:res1',
            to: 'id0'
        },
        {
            title: '',
            from: 'id0:res1',
            to: 'id4'
        },
        {
            title: '',
            from: 'id1:res2',
            to: 'id2'
        },
        {
            title: '',
            from: 'id2:res1',
            to: 'id3'
        },
        {
            title: '',
            from: 'id2:res2',
            to: 'id4'
        },
        {
            title: '',
            from: 'id4:res1',
            to: 'id3'
        }
    ]
}
