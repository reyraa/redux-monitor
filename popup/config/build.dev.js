import esbuildServe from 'esbuild-serve';

esbuildServe(
  {
    entryPoints: ['./src/app.tsx'],
    bundle: true,
    // minify: true,
    sourcemap: true,
    // target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    watch: {
      onRebuild(error, result) {
        if (error) console.error('Watch build failed:', error)
        else console.log('Watch build succeeded.')
      },
    },
    tsconfig: 'tsconfig.json',
    outfile: './public/bundle.js',
    // splitting: true,
    // chunkNames: "",
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    loader: {
      '.png': 'dataurl',
      '.eot': 'dataurl',
      '.svg': 'dataurl',
      '.ttf': 'dataurl',
      '.woff': 'dataurl',
    },
  },
  {
      port: 8081,
      root: './public'
  }
);
