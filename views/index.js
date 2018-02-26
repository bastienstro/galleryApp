export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
		</head>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/app.js"></script>
    </html>
  `;
};