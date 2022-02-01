const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다", 
        author: "키케로",
    },
    {
        quote: "네 믿음은 네 생각이 된다. 네 생각은  네 말이 된다. 네말은 네 행동이 된다. 네행동은 네 습관이된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.", 
        author: "간디",
    },
    {
        quote: "그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요,  그대 혼자 가야할 길임을 명심하라.  비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라.", 
        author: "인디언 속담",
    },
    {
        quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.", 
        author: "헬렌 켈러",
    },
    {
        quote: "자신의 본성이 어떤것이든 그에 충실하라 . 자신이 가진 재능의 끈을 놓아 버리지 마라. 본성이 이끄는 대로 따르면 성공할것이다", 
        author: "시드니 스미스",
    },
    {
        quote: "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.", 
        author: "메이벨 뉴컴버",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.", 
        author: "괴테",
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.", 
        author: "탈무드",
    },
    {
        quote: "물러나서 조용하게 구하면 배울 수 있는 스승은 많다. 사람은 가는 곳마다 보는 것마다 모두 스승으로서 배울 것이 많은 법이다.", 
        author: "맹자",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.", 
        author: "괴테",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;