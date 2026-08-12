import { getStore } from '@netlify/blobs';

export default async (req) => {
  const id = new URL(req.url).searchParams.get('id');
  if (!id || !/^[A-Za-z0-9_-]{20,32}$/.test(id)) return Response.json({ error: 'Not found' }, { status: 404 });
  try {
    const store = getStore('padel-round-shared-results');
    const data = await store.get(id, { type: 'json' });
    if (!data) return Response.json({ error: 'Not found' }, { status: 404 });
    return Response.json(data, { headers: { 'cache-control': 'public, max-age=60' } });
  } catch (e) {
    return Response.json({ error: 'Unable to load result' }, { status: 500 });
  }
};
