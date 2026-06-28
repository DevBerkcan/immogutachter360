/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SMTP_PASS: string;
  readonly PUBLIC_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
