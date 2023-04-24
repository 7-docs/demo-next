# 7-docs demo

Source of [7d-eta.vercel.app](https://7d-eta.vercel.app), built with:

- Node.js + Vercel Edge
- [@7-docs/edge](https://www.npmjs.com/package/@7-docs/edge)
- [Next.js](https://nextjs.org)

The demo uses the Markdown content of the React documentation, ingested from the
[reactjs/react.dev](https://github.com/reactjs/react.dev/tree/main/src/content) repository to a Supabase vector database
using [7-docs](https://github.com/7-docs/7-docs).

## Function

Here's the handler for an edge function ([full source](./src/pages/api/completion.ts)):

```ts
import { createClient } from '@supabase/supabase-js';
import { getCompletionHandler } from '@7-docs/edge';
import * as supabase from '@7-docs/edge/supabase';
import { namespace, prompt, system } from '../../config';
import type { MetaData } from '@7-docs/edge';

type QueryFn = (vector: number[]) => Promise<MetaData[]>;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

const client = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const query: QueryFn = (vector: number[]) => supabase.query({ client, namespace, vector });

export const config = {
  runtime: 'edge'
};

export default getCompletionHandler({ OPENAI_API_KEY, query, system, prompt });
```

## UI

TODO ([full source](./src/pages/index.tsx))
