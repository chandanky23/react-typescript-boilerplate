module.exports  = [
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" }
    ]
  },
  {
    test: /\.svg$/,
    loader: 'file-loader'
  },
  
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {configFile: 'tsconfig.json'}
  },
  {
    test: /\.(png|jp(e*)g|svg)$/,  
    use: {
      loader: 'url-loader',
    },
  },
  {
    enforce: "pre",
    test: /\.js$/,
    loader: "source-map-loader",
  },
]