const comida =[
    {   id: 1,
        name : 'cafe',
        img : '../static/rell.jpg', 
        year : '2020',
        price : 6300,
        description: 'rico',
        category: 'desayuno'

    } ,

    {   id: 2,
        name : 'latte',
        img : '../static/leona.jpg',
        year: '2011',
        price: 4800,
        description: 'rico',
        category: 'desayuno'
    } ,

    {   id: 3,
        name : 'cafe con leche',
        img : '../static/nami.jpg',
        year : 2012,
        price : 4800, 
        description: 'esta mas rico no se xd',
        category: 'desayuno'
    } ,
    
    {   id: 4,
        name : 'leche',
        img : '../staic/lulu.jpg',
        year: 2012,
        price : 4800,
        description: 'rico',
        category: 'desayuno'
    },

    {   id: 5,
        name: 'licuado',
        img : './static/.../lulu.jpg',
        year: 2019,
        price: 6300,
        description: 'rico',
        category: 'desayuno'
    },

    {   id: 6,
        name : 'galletas',
        img: '../static/soraka.jpg',
        year: 2009,
        price: 450,
        description: 'rico',
        category: 'desayuno'
    },
    {   id: 7,
        name : 'pollo al horno',
        img : '../static/rell.jpg', 
        year : '2020',
        price : 6300,
        description: 'rico',
        category: 'almuerzo'

    } ,

    {   id: 8,
        name : 'milanesa',
        img : '../static/leona.jpg',
        year: '2011',
        price: 4800,
        description: 'rico',
        category: 'almuerzo'
    } ,

    {   id: 9,
        name : 'pancho',
        img : '../static/nami.jpg',
        year : 2012,
        price : 4800, 
        description: 'esta mas rico no se xd',
        category: 'almuerzo'
    } ,
    
    {   id: 10,
        name : 'hamburguesa',
        img : '../staic/lulu.jpg',
        year: 2012,
        price : 4800,
        description: 'rico',
        category: 'almuerzo'
    },

    {   id: 11,
        name: 'sopá',
        img : './static/.../lulu.jpg',
        year: 2019,
        price: 6300,
        description: 'rico',
        category: 'almuerzo'
    },

    {   id: 12,
        name : 'estofado',
        img: '../static/soraka.jpg',
        year: 2009,
        price: 450,
        description: 'rico',
        category: 'almuerzo'
    },
]



    export const getFetchComida = new Promise ((resolve,reject)=>{
         let condition = true;
         if(condition){
             setTimeout(()=>{
                 resolve(comida)
             }, 1000)
         } else {
             reject('error')
         }
    })