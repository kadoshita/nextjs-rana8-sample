'use client';

import { useFormState } from 'react-dom';
import { fetchMastodonServerInfo } from './actions';

const initialState = {};

export function MastodonInfo() {
  const [state, formAction] = useFormState(
    fetchMastodonServerInfo,
    initialState
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="mastodon-server-domain">Mastodon Server Domain</label>
        <input
          type="text"
          name="mastodon-server-domain"
          defaultValue="mstdn.sublimer.me"
        />
        <button type="submit">Fetch Mastodon Server Info</button>
      </div>
      <div>
        <textarea
          readOnly
          cols={180}
          rows={32}
          value={JSON.stringify(state, null, 2)}
        ></textarea>
      </div>
    </form>
  );
}
