import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      host: '9000-firebase-monthlyearthday2git-1752817683361.cluster-uf6urqn4lned4spwk4xorq6bpo.cloudworkstations.dev',
      clientPort: 9000,
    },
  },
});
