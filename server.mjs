import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT||4173);
const ollamaHost=process.env.OLLAMA_HOST||'127.0.0.1';
const ollamaPort=Number(process.env.OLLAMA_PORT||11434);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png'};
function proxy(req,res){const target=(req.url||'').replace(/^\/ollama/,'')||'/';const p=http.request({host:ollamaHost,port:ollamaPort,path:target,method:req.method,headers:{...req.headers,host:`${ollamaHost}:${ollamaPort}`}},up=>{res.writeHead(up.statusCode||502,up.headers);up.pipe(res)});p.on('error',e=>{res.writeHead(502,{'content-type':'application/json'});res.end(JSON.stringify({error:'Ollama indisponible: '+e.message}))});req.pipe(p)}
function serve(req,res){let pathname=decodeURIComponent((req.url||'/').split('?')[0]);let rel=pathname==='/'?'index.html':pathname.replace(/^\/+/, '');let file=path.resolve(root,rel);if(!file.startsWith(path.resolve(root))){res.writeHead(403);return res.end('Forbidden')}fs.stat(file,(err,st)=>{if(err||!st.isFile()){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'content-type':mime[path.extname(file).toLowerCase()]||'application/octet-stream','cache-control':'no-cache'});fs.createReadStream(file).pipe(res)})}
http.createServer((req,res)=>{if((req.url||'').startsWith('/ollama/'))return proxy(req,res);if(!['GET','HEAD'].includes(req.method||'')){res.writeHead(405);return res.end('Method not allowed')}serve(req,res)}).listen(port,'127.0.0.1',()=>{console.log(`QUALITA: http://localhost:${port}`);console.log(`Ollama proxy: /ollama -> http://${ollamaHost}:${ollamaPort}`)});