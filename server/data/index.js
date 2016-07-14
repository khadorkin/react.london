/*eslint-disable */
const dummyState = {
  data: {
    community: {
      id: 'V3-PWiMAAGEz2yz5',
      title: 'React London',
      summary: 'React is having a huge impact on the way we think about Web UI development. Our Meetups are an opportunity to learn why and share experiences. We are a sociable group and very welcoming to newcomers.\nSee you soon!',
      mailingListTitle: 'Get ticket reminders and event information about React London events straight to your inbox.',
      events: [
        {
          id: 'V3-PjyMAAF0n2y3Q',
          title: 'React London July Meetup',
          datetime: {
            iso: '2016-07-26T17:30:00+0000',
          },
          timestampEnd: {
            iso: '2016-07-26T20:30:00+0000',
          },
          address: 'Skills Matter, CodeNode, 10 South Place, London EC2M 7EB',
          talks: [
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'Earlier this year, Facebook came out with their take on building a highly customisable rich text editor ­Draft.js. Built especially for React and powered by an immutable data model, it takes on the daunting task of solving all our rich text editing problems. She will provide a brief explanation on how Draft.js works and talk about her experience using it on a project along with Redux Form.',
              title: 'Draft.js in the real world',
              speakers: [
                {
                  name: 'Kadi Kraman',
                  company: 'Red Badger',
                  twitterHandle: 'kadikraman',
                  githubHandle: 'kadikraman',
                  blogURL: '',
                  imageURL: 'https://react.london/img/Speakers/kadikraman.jpg',
                },
              ],
            },
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'A talk around the challenges that BBC Sport have faced with running React at scale, and what we did to overcome them, and our migration from an old Angluar stack. Ben will also cover in a little detail how the BBC push updates to millions of clients simultaneously.',
              title: 'BBC Sport and React',
              speakers: [
                {
                  name: 'Ben Lambert',
                  company: 'BBC Sport',
                  twitterHandle: 'benjdlambert',
                  githubHandle: 'benjdlambert',
                  blogURL: '',
                  imageURL: 'https://react.london/img/Speakers/benjdlambert.jpeg',
                },
              ],
            },
            {
              id: 'V3-t-SMAALE426eq',
              summary: 'Using React, GraphQL and Relay, in production, for a national publication. Fabio will outline what went well, what went wrong, traps to avoid, and how to avoid them.',
              title: 'React, GraphQL and Relay in practice',
              speakers: [
                {
                  name: 'Fabio Santos',
                  company: 'YLD',
                  twitterHandle: 'fabiosantoscode',
                  githubHandle: 'fabiosantosart',
                  blogURL: '',
                  imageURL: 'https://react.london/img/Speakers/fabiosantosart.jpg',
                },
              ],
            },,
          ],
        },
      ],
    },
  },
};
/*eslint-enable */

export function getSiteState() {
  return new Promise(resolve => resolve(dummyState.data));
}
