import git from 'isomorphic-git';
import fs from 'node:fs';
import path from 'node:path';
import http from 'isomorphic-git/http/node';

const dir = process.cwd();

async function run() {
  console.log('Initializing Git repository...');
  await git.init({ fs, dir });

  console.log('Staging files...');
  async function addFilesRecursively(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(dir, fullPath).replace(/\\/g, '/');

      if (relPath.startsWith('node_modules') || relPath.startsWith('.git') || relPath.startsWith('dist')) {
        continue;
      }

      if (entry.isDirectory()) {
        await addFilesRecursively(fullPath);
      } else if (entry.isFile()) {
        await git.add({ fs, dir, filepath: relPath });
      }
    }
  }

  await addFilesRecursively(dir);

  console.log('Creating commit...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Harshjii',
      email: 'harshjii@github.com'
    },
    message: 'Initial commit: Complete Neha Boutique Luxury E-Commerce React Application'
  });
  console.log('Committed successfully with SHA:', sha);

  console.log('Adding remote origin: https://github.com/Harshjii/Neha_boutique.git');
  try {
    await git.addRemote({
      fs,
      dir,
      remote: 'origin',
      url: 'https://github.com/Harshjii/Neha_boutique.git',
      force: true
    });
  } catch (e) {
    // Remote might exist
  }

  console.log('Repo is ready for pushing!');
}

run().catch(err => console.error('Git execution error:', err));
