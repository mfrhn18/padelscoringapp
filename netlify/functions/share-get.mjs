import { getStore } from '@netlify/blobs';

export default async (req) => {
  const id = new URL(req.url).searchParams.get('id');
  if (!id || !/^[A-Za-z0-9_-]{20,32}$/.test(id)) {
    console.warn('share-get invalid id', id);
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
  try {
    const store = getStore('padel-round-shared-results');
    const data = await store.get(id, { type: 'json', consistency: 'strong' });
    console.log('share-get lookup', { id, found: !!data });
    if (!data) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json(data, { headers: { 'cache-control': 'no-store' } });
  } catch (e) {
    console.error('share-get error', e);
    return Response.json({ error: 'Unable to load result' }, { status: 500 });
  }
};
