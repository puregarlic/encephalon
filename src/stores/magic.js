import { readable } from 'svelte/store'
import { Magic } from 'magic-sdk'

export const magic = process.browser ? new Magic(process.env.MAGIC_PUBLIC_KEY) : undefined