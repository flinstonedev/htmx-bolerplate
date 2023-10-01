import { Elysia } from "elysia";
import pug from "pug";
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => {
    const baseHtml = pug.compileFile('src/templates/table.pug');
    const html = baseHtml({ title: 'Coolio x' });

    return html;
  })
  .get("/new-content", () => {
    const baseHtml = pug.compileFile('src/templates/new-content.pug');
    const html = baseHtml();

    return html;
  })

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
