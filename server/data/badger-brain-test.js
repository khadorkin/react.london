import {
  getSiteState,
  badgerBrainURL,
  siteStateQuery,
} from './badger-brain';

describe('data/badger-brain backend getSiteState', () => {
  it('uses the http client to query badger brain', () => {
    const postFn = (url, query) => {
      expect(url).to.equal(badgerBrainURL);
      expect(query).to.equal(siteStateQuery);
    };
    return getSiteState(postFn);
  });
});
