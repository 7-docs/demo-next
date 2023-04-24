import { createClient } from '@supabase/supabase-js';
import { getCompletionHandler } from '@7-docs/edge';
import * as supabase from '@7-docs/edge/supabase';
import { namespace, prompt, system } from '../../../config';
import type { MetaData } from '@7-docs/edge';

type QueryFn = (vector: number[]) => Promise<MetaData[]>;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

if (!OPENAI_API_KEY) throw new Error('Env var OPENAI_API_KEY missing');
if (!SUPABASE_URL) throw new Error('Env var SUPABASE_URL missing');
if (!SUPABASE_API_KEY) throw new Error('Env var SUPABASE_API_KEY missing');

const client = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const query: QueryFn = (vector: number[]) => supabase.query({ client, namespace, vector });

export const config = {
  runtime: 'edge'
};

export default getCompletionHandler({ OPENAI_API_KEY, query, system, prompt });
