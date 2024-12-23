export default {
    name:'work',
    type:'document',
    title:'Work',
    fields:[
        {
            name:"title",
            type:"string"
        },
        {
            name:'description',
            type:"string"
        },
        {
            name:"imgurl",
            type:"image",
            options:{
                hotspot:true
            }
        },
        {
            name:"github_link",
            type:"string"
        },
        {
            name:"web_app_link",
            type:"string"
        },
        {
            name: "category",
            type: "string",
            title: "Category",
            options: {
              list: [
                { title: "full_stack", value: "full_stack" },
                { title: "frontend", value: "frontend" },
                { title: "backend", value: "backend" },
              ],
              layout: "radio", 
            },
          }
          
    ]
}