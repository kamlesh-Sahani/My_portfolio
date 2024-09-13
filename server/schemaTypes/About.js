export default {
    name:'about',
    title:'Abouts',
    type:'document',
    fields:[
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'description',
            type: 'string',

        },
        {
            name: 'imgUrl',
            type: 'image',
            options:{
                hotspot:true
            }
        }
    ]
}