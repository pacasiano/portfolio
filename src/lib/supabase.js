import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL ?? "https://yfolcfbmwqgbthgzbwot.supabase.co",
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlmb2xjZmJtd3FnYnRoZ3pid290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5OTkxMzMsImV4cCI6MjEwMzU3NTEzM30.LL7aF5vUfR71Z1ONCj02b4CTIZ07EsnDnliqhAl5jTo"
);
