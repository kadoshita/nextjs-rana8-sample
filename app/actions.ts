'use server';

export async function fetchMastodonServerInfo(
  prevState: any,
  formData: FormData
) {
  const mastodonServerDomain = formData.get('mastodon-server-domain');
  const res = await fetch(`https://${mastodonServerDomain}/api/v1/instance`);
  const data = await res.json();
  return data;
}
