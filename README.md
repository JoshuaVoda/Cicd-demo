# cicd-demo

A small Express task API used to practice CI/CD with GitHub Actions and Docker.

On every push and pull request to `main`, the pipeline:
1. **Lints** the code with ESLint
2. **Tests** it on Node 18, 20, and 22 (matrix build)
3. **Builds** a multi-stage Docker image and smoke-tests the running container

## Run locally
```
npm install
npm run lint
npm test
npm start          # http://localhost:3000/health
docker build -t cicd-demo .
docker run -p 3000:3000 cicd-demo
```
