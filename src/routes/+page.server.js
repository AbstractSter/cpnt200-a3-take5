import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("art_stuff").select();
  return {
    art_stuff: data ?? [],
  };
}