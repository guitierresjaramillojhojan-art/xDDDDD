import { createClient } from "@supabase/supabase-js";
  const SUPABASE_URL = "https://ahkdhxxjojmrejngcdrz.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoa2RoeHhqb2ptcmVqbmdjZHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0OTM2MDksImV4cCI6MjA3OTA2OTYwOX0.ZgJ5UI0q_TQAts4J4WeINEKDoLxHEJhUQ3oiENEVxl0";

  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);