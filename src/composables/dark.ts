// these APIs are auto-imported from @vueuse/core
export const isDark = useDark()
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()

watch(() => isDark.value, value => document.body.setAttribute('arco-theme', value ? 'dark' : ''), { immediate: true })
