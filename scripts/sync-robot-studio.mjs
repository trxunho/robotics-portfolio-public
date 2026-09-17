import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

// Build the sibling source project into a namespaced, self-contained public app.
const project = fileURLToPath(new URL('../', import.meta.url));
const source = path.resolve(process.argv[2] || path.join(project, '../a4-robot-studio'));
const result = spawnSync(process.execPath, [path.join(source, 'node_modules/vite/bin/vite.js'), 'build', '--base', '/robot-studio/', '--outDir', 'dist-vercel'], { cwd: source, stdio: 'inherit' });
if (result.status !== 0) process.exit(result.status || 1);
const build = path.join(source, 'dist-vercel');
for (const name of await readdir(path.join(build, 'assets'))) {
  if (!name.endsWith('.js')) continue;
  const file = path.join(build, 'assets', name);
  const code = await readFile(file, 'utf8');
  await writeFile(file, code.replaceAll('/references/', '/robot-studio/references/'));
}
const destination = path.join(project, 'public/robot-studio');
await mkdir(destination, { recursive: true });
await cp(build, destination, { recursive: true });
console.log('Robot studio exported to public/robot-studio.');
