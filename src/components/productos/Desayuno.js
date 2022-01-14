const desayuno =[
    {   id: 1,
        name : 'cafe',
        img : '../static/rell.jpg', 
        year : '2020',
        price : 6300,
        description: 'rico',
        

    } ,

    {   id: 2,
        name : 'latte',
        img : '../static/leona.jpg',
        year: '2011',
        price: 4800,
        description: 'rico',
        
    } ,

    {   id: 3,
        name : 'cafe con leche',
        img : '../static/nami.jpg',
        year : 2012,
        price : 4800, 
        description: 'esta mas rico no se xd',
        
    } ,
    
    {   id: 4,
        name : 'leche',
        img : '../staic/lulu.jpg',
        year: 2012,
        price : 4800,
        description: 'rico',
    },

    {   id: 5,
        name: 'licuado',
        img : './static/.../lulu.jpg',
        year: 2019,
        price: 6300,
        description: 'rico'
    },

    {   id: 6,
        name : 'galletas',
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
                 resolve(desayuno)
             }, 1000)
         } else {
             reject('error')
         }
    })