import { BASEURL, SERVICES, REST } from '../api-requests/const';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${BASEURL}/${SERVICES}/${REST}/`, (req, res, ctx) => {
    const method = req.url.searchParams.get('method');
    const text = req.url.searchParams.get('text');
    let response;
    if (method === 'flickr.photos.getRecent') {
      response = {
        photos: {
          photo: [
            {
              id: '52809279446',
              owner: '49968232@N00',
              secret: '455236016d',
              server: '65535',
              farm: 66,
              title: 'sturgeon',
              ispublic: 1,
              isfriend: 0,
              isfamily: 0,
            },
            {
              id: '52809627190',
              owner: '197353768@N08',
              secret: '5632789c0b',
              server: '65535',
              farm: 66,
              title: "L'Azure Hotel - MICE",
              ispublic: 1,
              isfriend: 0,
              isfamily: 0,
            },
          ],
        },
      };
    }
    if (method === 'flickr.photos.search' && text === 'portugal') {
      response = {
        photos: {
          photo: [
            {
              id: '52809541189',
              owner: '10299779@N03',
              secret: 'a710527ec0',
              server: '65535',
              farm: 66,
              title: 'portimao',
              ispublic: 1,
              isfriend: 0,
              isfamily: 0,
            },
            {
              id: '52809725430',
              owner: '10299779@N03',
              secret: 'fe3c644457',
              server: '65535',
              farm: 66,
              title: 'Lisbon_2022 11 12_2471',
              ispublic: 1,
              isfriend: 0,
              isfamily: 0,
            },
          ],
        },
      };
    }
    if (method === 'flickr.photos.getinfo') {
      response = {
        photo: {
          id: '52802634579',
          secret: 'cc27994385',
          server: '65535',
          farm: 66,
          dateuploaded: '1681207478',
          isfavorite: 0,
          license: '0',
          safety_level: '0',
          rotation: 0,
          owner: {
            nsid: '42534216@N03',
            username: 'henriksundholm.com',
            realname: 'Henrik Sundholm',
            location: 'Eskilstuna, Sweden',
            iconserver: '8706',
            iconfarm: 9,
            path_alias: 'visualideas',
            gift: {
              gift_eligible: true,
              eligible_durations: ['year', 'month', 'week'],
              new_flow: true,
            },
          },
          title: { _content: 'Late Evening Lisbon' },
          description: {
            _content:
              'One of the last shots I took of the Lisbon cityscape this evening. I got it from a vantage point called Miradouro da Senhora do Monte.',
          },
          visibility: { ispublic: 1, isfriend: 0, isfamily: 0 },
          dates: {
            posted: '1681207478',
            taken: '2019-11-30 19:56:18',
            takengranularity: 0,
            takenunknown: '0',
            lastupdate: '1681212202',
          },
          views: '70',
          editability: { cancomment: 0, canaddmeta: 0 },
          publiceditability: { cancomment: 1, canaddmeta: 0 },
          usage: { candownload: 0, canblog: 0, canprint: 0, canshare: 1 },
          comments: { _content: '0' },
          notes: { note: [] },
          people: { haspeople: 0 },
          tags: {
            tag: [
              {
                id: '42511162-52802634579-7046435',
                author: '42534216@N03',
                authorname: 'henriksundholm.com',
                raw: 'Miradouro da Senhora do Monte',
                _content: 'miradourodasenhoradomonte',
                machine_tag: 0,
              },
            ],
          },
          location: {
            latitude: '38.719453',
            longitude: '-9.132535',
            accuracy: '16',
            context: '0',
            locality: { _content: 'Socorro' },
            county: { _content: 'Lisbon' },
            region: { _content: 'Lisbon' },
            country: { _content: 'Portugal' },
            neighbourhood: { _content: '' },
          },
          geoperms: { ispublic: 1, iscontact: 0, isfriend: 0, isfamily: 0 },
          urls: {
            url: [
              {
                type: 'photopage',
                _content: 'https://www.flickr.com/photos/visualideas/52802634579/',
              },
            ],
          },
          media: 'photo',
        },
        stat: 'ok',
      };
    }
    return res(ctx.status(200), ctx.json(response));
  }),
];
