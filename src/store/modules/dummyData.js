const newsData = [
  {
    id: '1',
    title: 'News 1',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '2',
    title: 'News 2',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '3',
    title: 'News 3',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '4',
    title: 'News 4',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '5',
    title: 'News 5',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '6',
    title: 'News 6',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '7',
    title: 'News 7',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '8',
    title: 'News 8',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
  {
    id: '9',
    title: 'News 9',
    content: 'Bacon ipsum dolor amet andouille tongue kevin landjaeger shank turkey jerky corned beef, spare ribs pork belly alcatra venison. Spare ribs filet mignon ribeye alcatra ball tip tri-tip. Shank tri-tip tenderloin, strip steak pastrami beef ribs chislic rump tail swine bresaola landjaeger shankle jowl. Pancetta meatball picanha ball tip hamburger bresaola prosciutto. Ribeye landjaeger tongue tenderloin sirloin sausage, biltong leberkas bacon capicola salami fatback ball tip frankfurter. Jowl doner tenderloin beef ribs sirloin venison.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    category: ['Gossip', 'International', 'Health'],
  },
];

export default newsData;
