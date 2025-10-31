import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'xpplg.site','p.xpplg.site'
      ],
      },
  
})

//export default defineConfig({
  //plugins: [react()],
  // server: {
   // allowedHosts: [
   //   'test.xpplg.site',
   // ],
 // },

  
//})
