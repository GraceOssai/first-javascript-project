let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const mainQuotes = [{
  quote:' When I am afraid, I put my trust in you Read more',
  person : 'Psalms 56:3'
},
{
  quote: 'A faithful man shall abound with blessings',
  person: "Proverbs 28:20"
},
{
  quote: 'Cast all your anxieties on him because he cares for you',
  person: '1 Peter 5:7'
},
{
  quote: 'My presence will go with you, and I will give you rest.',
  person: 'Exodus 33:14'
},
  {quote: 'It is the Lord who goes before you. He will be with you.',
  person: 'Deuteronomy 31:8'
},
{
  quote: 'A Psalm of David. The Lord is my shepherd; I shall not want',
  person: 'Psalm 23:1'
},
{
  quote: 'Give thanks to the Lord, for He is good; his love endures forever.',
  person: 'Psalm 107:1'
},
{
  quote: 'For you are all sons of God through faith in Christ Jesus.',
  person: 'Galatians 3:26'
},
{
  quote: 'Wait for the Lord; be strong, take heart, and wait for the Lord.',
  person: 'Psalm 27:14'
}
]


btn.addEventListener('click', function(){
  let random = Math.floor(Math.random() * mainQuotes.length);
  
  quote.innerText = mainQuotes[random].quote;
  person.innerText = mainQuotes[random].person;
})


