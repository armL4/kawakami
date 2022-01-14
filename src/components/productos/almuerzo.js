const Almuerzo =[
    {   id: 1,
        name : 'pollo al horno',
        img : '../static/rell.jpg', 
        year : '2020',
        price : 6300,
        description: 'rico',
        

    } ,

    {   id: 2,
        name : 'milanesa',
        img : '../static/leona.jpg',
        year: '2011',
        price: 4800,
        description: 'rico',
        
    } ,

    {   id: 3,
        name : 'pancho',
        img : '../static/nami.jpg',
        year : 2012,
        price : 4800, 
        description: 'esta mas rico no se xd',
        
    } ,
    
    {   id: 4,
        name : 'hamburguesa',
        img : '../staic/lulu.jpg',
        year: 2012,
        price : 4800,
        description: 'rico',
    },

    {   id: 5,
        name: 'sopá',
        img : './static/.../lulu.jpg',
        year: 2019,
        price: 6300,
        description: 'rico'
    },

    {   id: 6,
        name : 'estofado',
        img: '../static/soraka.jpg',
        year: 2009,
        price: 450,
        description: 'rico',
    },
]



    export const getFetch = new Promise ((resolve,reject)=>{
         let condition = true;
         if(condition){
             setTimeout(()=>{
                 resolve(Almuerzo)
             }, 1000)
         } else {
             reject('error')
         }
    })