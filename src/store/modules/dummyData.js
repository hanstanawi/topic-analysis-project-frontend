const newsData = [
  {
    id: 'article01',
    title: 'News 1',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article02',
    title: 'News 2',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article03',
    title: 'News 3',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article04',
    title: 'News 4',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article05',
    title: 'News 5',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article06',
    title: 'News 6',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article07',
    title: 'News 7',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article08',
    title: 'News 8',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: 'article09',
    title: 'News 9',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
];

const topicsData = [
  {
    id: '131323',
    title: 'Topic 1',
    content: 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. ',
    sources: [
      {
        name: 'CNN',
        amount: 40,
      },
      {
        name: 'BBC',
        amount: 30,
      },
      {
        name: 'PTT',
        amount: 10,
      },
      {
        name: 'WSJ',
        amount: 50,
      },
    ],
    keywords: [
      {
        keyword: 'Apple',
        quantity: 20,
      },
      {
        keyword: 'Orange',
        quantity: 10,
      },
      {
        keyword: 'Watermelon',
        quantity: 50,
      },
      {
        keyword: 'Grapes',
        quantity: 20,
      },
      {
        keyword: 'Banana',
        quantity: 10,
      },
      {
        keyword: 'Chocolate',
        quantity: 100,
      },
    ],
  },
  {
    id: '9080835',
    title: 'Topic 2',
    content: 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. ',
    sources: [
      {
        name: 'CNN',
        amount: 40,
      },
      {
        name: 'BBC',
        amount: 30,
      },
      {
        name: 'PTT',
        amount: 10,
      },
      {
        name: 'WSJ',
        amount: 50,
      },
    ],
    keywords: [
      {
        keyword: 'Apple',
        quantity: 20,
      },
      {
        keyword: 'Orange',
        quantity: 10,
      },
      {
        keyword: 'Watermelon',
        quantity: 50,
      },
      {
        keyword: 'Grapes',
        quantity: 20,
      },
      {
        keyword: 'Banana',
        quantity: 10,
      },
      {
        keyword: 'Chocolate',
        quantity: 100,
      },
    ],
  },
  {
    id: '345234',
    title: 'Topic 3',
    content: 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. ',
    sources: [
      {
        name: 'CNN',
        amount: 40,
      },
      {
        name: 'BBC',
        amount: 30,
      },
      {
        name: 'PTT',
        amount: 10,
      },
      {
        name: 'WSJ',
        amount: 50,
      },
    ],
    keywords: [
      {
        keyword: 'Apple',
        quantity: 20,
      },
      {
        keyword: 'Orange',
        quantity: 10,
      },
      {
        keyword: 'Watermelon',
        quantity: 50,
      },
      {
        keyword: 'Grapes',
        quantity: 20,
      },
      {
        keyword: 'Banana',
        quantity: 10,
      },
      {
        keyword: 'Chocolate',
        quantity: 100,
      },
    ],
  },
  {
    id: '457123',
    title: 'Topic 4',
    content: 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. ',
    sources: [
      {
        name: 'CNN',
        amount: 40,
      },
      {
        name: 'BBC',
        amount: 30,
      },
      {
        name: 'PTT',
        amount: 10,
      },
      {
        name: 'WSJ',
        amount: 50,
      },
    ],
    keywords: [
      {
        keyword: 'Apple',
        quantity: 20,
      },
      {
        keyword: 'Orange',
        quantity: 10,
      },
      {
        keyword: 'Watermelon',
        quantity: 50,
      },
      {
        keyword: 'Grapes',
        quantity: 20,
      },
      {
        keyword: 'Banana',
        quantity: 10,
      },
      {
        keyword: 'Chocolate',
        quantity: 100,
      },
    ],
  },
  {
    id: '340567',
    title: 'Topic 5',
    content: 'Its had resolving otherwise she contented therefore. Afford relied warmth out sir hearts sister use garden. Men day warmth formed admire former simple. Humanity declared vicinity continue supplied no an. He hastened am no property exercise of. Dissimilar comparison no terminated devonshire no literature on. Say most yet head room such just easy. ',
    sources: [
      {
        name: 'CNN',
        amount: 40,
      },
      {
        name: 'BBC',
        amount: 30,
      },
      {
        name: 'PTT',
        amount: 10,
      },
      {
        name: 'WSJ',
        amount: 50,
      },
    ],
    keywords: [
      {
        keyword: 'Apple',
        quantity: 20,
      },
      {
        keyword: 'Orange',
        quantity: 10,
      },
      {
        keyword: 'Watermelon',
        quantity: 50,
      },
      {
        keyword: 'Grapes',
        quantity: 20,
      },
      {
        keyword: 'Banana',
        quantity: 10,
      },
      {
        keyword: 'Chocolate',
        quantity: 100,
      },
    ],
  },
];

const wordCloud = {
  韓國瑜: 8,
  總統: 1,
  肺炎: 5,
  武漢: 2,
  高雄: 11,
  稅: 4,
};

const historyList = [
  {
    id: 4354356,
    keyword: '韓國瑜',
    frequency: 10,
    articles: {
      title: '[新聞] 被控拿吳4000萬 韓國瑜：有就辭高雄巿長',
      content: '被控拿吳4000萬 韓國瑜：有就辭高雄巿長 https://www.chinatimes.com/realtimenews/20190426001446-260407?chdtv 2019/04/26 中時電子報 陳弘美 前國民黨立委蔡正元臉書爆料，國民黨主席吳敦義為高雄市長韓國瑜募款4000萬，做為競 選高雄市長經費，但韓國瑜卻忘恩負義。對此，韓國瑜今接受訪問，怒嗆蔡正元要拿出證 據來，如果有拿，他就辭高雄市長職務！ 蔡正元日前在臉書表示，韓國瑜選高雄市長時，國民黨財庫已山窮水盡，吳敦義靠個人力 量為韓國瑜募款四千萬元，作競選經費。但「韓國瑜現在已成神，郭台銘已成仙，朱立倫 王金平也是羅漢菩薩，在這堆神明的壇桌下，吳敦義為了維持這個家，只好繼續忍辱負重 」。 對於蔡正元指控，韓國瑜今接受訪問，怒嗆蔡正元要拿出證據出來，如果他真的有拿，他 就辭高雄市長！ -- 我肥得理直氣壯 我胖得比誰都爽 --',
    },
  },
  {
    id: 7867,
    keyword: '肺炎',
    frequency: 8,
    articles: {
      title: 'Re: [問卦] 怎麼當好一個薪水小偷?',
      content: ': 沒辦法像當官的或老闆上班去摩鐵打砲實在苦悶 : 上班族除了大便偷時間還能做些什麼當個稱職的薪水小偷? 先說結論：上班大便。 計算如下： 令，每個工作日均花上班時間大便20分鐘 則， 20分鐘 x 一週5日 x一年51週 （扣除行政假日） 共大便=5100分鐘=85小時=10.625工作天 也就是說 只要堅持每日上班大便20分鐘 一年老闆資方就要支付你10.63日薪 一年至少要付24000元給你去大便 （以月薪5萬元月工作日22日計算） 這是勞方無聲的反抗！ 這是我們人民的法槌！ 我今天這個大便不給他大下去我就不下班！ 各位勞工不要被資本主義奴化了 每日日一上班打卡就先浪漫突進 到公司廁所大便間去大20分鐘的便 一年白賺2萬4 變化球與補充： 1.可執行「加班大便」大便時薪更高 2.大便時產值為0造成資方實質損失 3.公司大便省自己家紙跟水 各位勞工朋友請注意 上班「帶薪大便」是我所能想像出 在合法範圍內 對無良資方最邪惡的報復舉動 歡迎勞工朋友一起參與這場構造改革 上班大便運動 帶薪大便運動 嗯嗯 ----- Sent from JPTT on my iPhone -- 就跟你說不要一直拿變性的事情去酸力鯨 人家都要氣到龜懶啪火了！ --',
    },
  },
  {
    id: 1241243,
    keyword: '國昌',
    frequency: 6,
    articles: {
      title: 'Re: [討論] DPP會不會後悔對時力下手太重',
      content: '大家都說黃國昌沒了 所以不用怕啦 是不是當邱顯智是塑膠？ 黃國昌搭煙案的資料還是邱顯智給的欸 黃國昌是重要的力量 但是時代力量不是黃國昌黨 立院少了黃國昌可惜 但是也沒有黃國昌沒了所以開香檳那麼誇張好嗎 --',
    },
  },
  {
    id: 435345,
    keyword: '高雄',
    frequency: 4,
    articles: {
      title: '[問卦] 滯北高雄人都回去幾%了?',
      content: '如題 自從有某市長帶高雄發大財之後 高雄人收入就蒸蒸日上 現在聽說每個人都在賣水果，年收超高 去年還在那邊說滯留台北的高雄年輕人太多了 只要高雄發財後，年輕人都會回去高雄 那我問一下你各位看八卦版的高雄人阿 你們現在是在高雄，還是仍然黏在台北不肯回去呢？ 有沒有滯北高雄人大概有幾％回高雄的八卦 --',
    },
  },
  {
    id: 36345,
    keyword: '稅',
    frequency: 2,
    articles: {
      title: 'Re: [問卦] 台灣房價跟特斯拉降價46％ 大家接受嗎？',
      content: '戳破你的嘴砲鬼扯剛好。你繼續跳針沒關係。 投資客最怕的囤空房稅打到要害，所以胡言亂語、指鹿為馬什麼招數都來了XD : ※ 引述《CassSunstein (Pm)》之銘言： : : 戰你剛好。 : : 豪華名車是要預購的、不是車商買來放著養蚊子賣不出去，然後上PTT自己吹口哨壯膽的。 : ????????????????????? : 那路上的都還是在預購的喔.... : : 確實有緩跌啊。 ~~~~~~ 我上方原句哪有說全台灣都跌？你私自亂加碼我的意思幹嘛？ : : 至於要大跌，真的要靠課兩間空屋以上的囤房稅（不是自住稅） : 全台灣都緩跌？　數據資料不會看嗎？ ?????? 所以你的自我腦補疑問句不干我事。 : 有些地方還在漲咧，你說跌就跌喔 : 不用這麼可撥拉～　 : : 吹口哨壯膽。那些跌價的Case怎麼說「賣不出去就變成對方買不起」。 : : 你跟自助餐女權如花說「老娘要嫁的開價是男方資產有2/3個比爾蓋茲等級然後先送我全套 : : LV、Chanel旗下各款包包一個--老娘是嫁給娶得起的、不是嫁給娶不起的。老娘撐了10年 : : 還嫁不掉不是老娘開價太高的問題。」一樣。 : 我們講賣得掉的例子，成交價就是行情，就是合理價 既然賣得掉，很好啊！給投資客拍拍手！以下就開始依照你的邏輯： 那麼囤空房稅就課不到「賣掉空房」的人，你怕修法開徵高稅率的囤空房稅幹嘛？ 課不到他啊！ 同時，買空房「然後住進去」的人，也不必怕被課囤空房稅啊！怕修法開徵高稅率的囤空 房稅幹嘛？課不到他啊！ 然後同樣依你邏輯，房價再高「總有土豪會繼續接手買，你們窮鬼不要在旁喊燒」，所以 這名買家既然會有後手買主，那麼他手上的空房就不會被囤著，你害怕政府開徵高稅率的 囤空房稅幹嘛？課不到他啊！ 依照你沾沾自喜說的「高價豪宅也有人買」，那麼你替「完全不會被課到」的買高價豪宅 、賣出高價豪宅的人擔什麼被課「囤空房」稅的心？ : 不用拿一些奇奇怪怪的名目出來討論 : : 更別提只要政府課囤房稅，你的房價撐得住的嘴砲就垮了。 : 你不要一直做夢拉，屯房稅你要課誰阿？ 課像你所敘述的這種靠哄抬買入、結果手上被套牢一堆房子，賣不掉、卻寧可撐著泡沫高 價不降價也不賣（因為銀行源源不斷拿存款戶的血汗錢支援炒房者的炒作）、牴觸古典自 由經濟學的無良投資客啊！ : 一個人自住法定三間給你自用 ~~~~???????? 聽你在放屁鬼扯。 : 加上子女要買超過額度來到屯房稅？？ 你在胡言亂語，跟我講得很清楚的「如果囤『第二間以上『『空』房」就要課囤空房稅 的情形無關。可憐你已經語無倫次了。 : 除非全台齊頭制下去課房屋稅 我在說囤空房稅、你跳針到「自住也會被課」的房屋稅來指鹿為馬。 自住的人連其他房間都沒投資都沒買都沒囤積，政府不往「囤空房」稅開徵高稅率，卻「 漲房屋稅」以至於讓根本沒買其他房、遑論炒房的一般市民不爽啊，會有這種南轅北轍政 策的原因當然是地主立委議員們的金權政治啊。然後加上你在網路上胡說八道指鹿為馬。 : 但是有可能嗎？　台灣８５％房子的自有率 : 注定不管藍綠，誰提誰死。 你在胡說八道放煙幕彈。願意提開徵高稅率的囤空房稅的立委議員不會死於民意。甚至修 法給優惠說自住以外有「一間」空房的不課囤空房稅，就會化解幾乎絕大多數民眾怕自己 被課到的疑慮了。 畢竟大多數一般人自住一間之餘，就算想投資房產也只有錢多買「一間」空房子（不管拖 多久才賣）而已。正常人沒那麼闊氣買「二間」以上空房翹腳囤著不賣。所以一般市民其 實歡迎囤空房稅來抑制那些無良的囤積炒房的財團跟中大型投資客。 只有無良的財團、中大型投資客才炒作導致手上一堆空房然後賣不掉而囤著、造成市場失 靈。依照經濟學的假設，賣方賣不掉貨物，應該自然就會降價，降到終於有人買「那十幾 間閒置的空屋中的至少一間」而不是「手上十間空屋沒人買，閒置在那邊」然後上網路嘴 砲「這些空屋是賣給買得起的人」。 然後這些嘴砲人看到網路上開始建議政府修法課囤空房稅就跳腳慌起來，然後指鹿為馬開 始胡說八道以抵制建議課徵高稅率的囤空房稅的輿論興起。 只是因為地主立委議員就算不會死但因為本身黑心所以不提修法開徵高稅率的囤空房稅。 : : 現在只在於地主立委們不修法而已，不是你放的「很多人想買那些狗屁不值那麼高價的『 : : 空屋』（並不是「想買買不到、供不應求」）煙幕彈。 : 不要再講地主立偉了啦！！ : 台南房屋稅就他媽是一個例子 看你這幾篇文章一再指鹿為馬將囤空房稅一直跳針到「房屋稅」要拖「自住得好好的、根 本沒買第二間房、遑論哪來囤空房」的多數一般市民下水，就知道你的護航炒房的露出無 良馬腳的邏輯不通的思維。 餘略。 --',
    },
  },
];

export {
  newsData, topicsData, wordCloud, historyList,
};
