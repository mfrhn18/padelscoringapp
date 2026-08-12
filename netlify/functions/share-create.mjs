import { getStore } from '@netlify/blobs';
import { randomBytes } from 'node:crypto';

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  try {
    const body = await req.json();
    if (!body || !body.name || !Array.isArray(body.players)) {
      console.error('share-create invalid snapshot');
      return Response.json({ error: 'Invalid session snapshot' }, { status: 400 });
    }
    const id = randomBytes(19).toString('base64url').slice(0, 26);
    const store = getStore('padel-round-shared-results');
    await store.setJSON(id, { ...body, status: 'finished' });
    console.log('share-create saved', { id, players: body.players.length, rounds: body.rounds?.length || 0 });
    return Response.json({ id });
  } catch (e) {
    console.error('share-create error', e);
    return Response.json({ error: 'Unable to create share link' }, { status: 500 });
  }
};
