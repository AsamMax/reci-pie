/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_API_RECIPIES_URL: string
    readonly VITE_API_TOKEN_URL: string
    readonly VITE_API_ME_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}