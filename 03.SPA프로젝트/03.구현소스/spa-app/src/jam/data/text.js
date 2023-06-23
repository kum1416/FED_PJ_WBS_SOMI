// Text 컴포넌트용 데이터 - text.js
// 메인페이지에서 사용되는 컴포넌트


const text_data = [
    {
        "tit":"Wildly Loved",
        "cont":"You will find our wild products in their simplest form. ^No additives or anything else can spoil their nature",
    },
    {
        "tit":"Our Wild Way",
        "cont":"Our philosophy is present in every stage of our ^production. We are endeavoring to contribute to the ^creation of a better world.",
    },
    {
        "tit":"Wild Recipes",
        "cont":"Take a look at the keyhole of our Wild kitchen! Get ideas on ^how to turn your own kitchen into a Wild.",
    },
]

export default text_data;


// 스플릿을사용해보자 ~~

// tit는 무조건 한개!

// 그런데!!! 아니나다를까!

// cont는 ?? 
// 한줄인게 있고두줄인게있꼬 세줄인게있져
// 이게어렵다!
// 키워 split(' 기준단어 ') 하면 배열화가된다. [ '', '', '' ] 이렇게

// 꺼내면되겠죠 split('기준단어')[몇번째] 
// text_data[0]['cont'].split('^') = ['You will find our wild products in their simplest form.','No additives or anything else can spoil their nature'] 

// text_data[0]['cont'].split('^')[0]
// text_data[0]['cont'].split('^')[1]