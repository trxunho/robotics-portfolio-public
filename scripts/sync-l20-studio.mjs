import { cp, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const project = fileURLToPath(new URL('../', import.meta.url));
const source = path.resolve(process.argv[2] || path.join(project, '../l20-hand-studio'));
const result = spawnSync(process.execPath, [path.join(source, 'node_modules/vite/bin/vite.js'), 'build', '--base', '/l20-studio/', '--outDir', 'dist-vercel'], { cwd: source, stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
const destination = path.join(project, 'public/l20-studio');
await mkdir(destination, { recursive: true });
await cp(path.join(source, 'dist-vercel'), destination, { recursive: true });
console.log('L20 studio exported to public/l20-studio.');
