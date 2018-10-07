import itemApi from '../api/item';
import bidApi from '../api/bid';
import bidderApi from '../api/bidder';
import packageJson from '../../package.json';

const API_V1 = '/api/v1';

export default app => {
  app.get(API_V1, (req, res) => {
    res.json({ version: packageJson.version });
  });

  app.use(API_V1, itemApi);
  app.use(API_V1, bidApi);
  app.use(API_V1, bidderApi);
};
