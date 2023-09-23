import './style/App.css';
import data from  './data.json'
import Hero from './hero'

function App(){
    const heroCard = data.map((hero, index) => 
        <Hero name={hero.name} url={hero.url} superpowers={hero.superpowers} occupation={hero.occupation} info={hero.info} key={index}></Hero>);
    return(
        <div className="HeroCard">{heroCard}</div>
        );
}

export default App;


// function App(){
//     return(
//         <>
//         {data.heroes.map((hero, index) => (
//             <Hero name={item.name} url={item.url} superpowers={item.superpowers} occupation={item.occupation} info={item.info}></Hero>
//         ))}
//         </>
//     )
// }

// export default App;

// // function App() {
// //   return (
// //     <div className="App">
// //       <Hero name="Супермен" url="https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg" occupation="борец за справедливость" superpowers="непробиваемость, суперсила, полёт, самоисцеление, суперзрение и суперслух, классный костюм" info="Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."></Hero>
// //       <Hero name="Бетмен" url="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg" occupation="борец с преступностью, филантроп, миллиардер" superpowers="интеллект, обширные познания, знания боевых искусств, ловкость" info="По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один из немногих героев, кто добился своего положения за счет ума и упорства, а не за счет мутаций."></Hero>
// //       <Hero></Hero>
// //     </div>
// //   );
// // }

// // export default App;
