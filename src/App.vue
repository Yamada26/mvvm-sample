<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    /* ブランドカラー */
    primaryColor: '#6750a4',
    primaryColorHover: '#7f67be',
    primaryColorPressed: '#5a3e9c',

    /* 基本色 */
    textColorBase: '#1c1b1f',
    bodyColor: '#ffffff',

    /* 枠・角丸 */
    borderRadius: '12px',
    borderColor: '#79747e',

    /* フォント */
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  Button: {
    borderRadiusMedium: '12px',
    textColorPrimary: '#ffffff',
  },
  Input: {
    borderRadius: '12px',
    caretColor: '#6750a4',
  },
  Card: {
    borderRadius: '16px',
  },
}
</script>

<template>
  <div>
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view />
    </n-config-provider>
  </div>
</template>
