import type { NextConfig } from "next";

const githubPagesRepo = process.env.GITHUB_PAGES_REPO || process.env.REPO_NAME;
const githubPagesBasePath =
  process.env.GITHUB_PAGES === "1" && githubPagesRepo ? `/${githubPagesRepo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(githubPagesBasePath
    ? {
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
      }
    : {}),
};

export default nextConfig;
