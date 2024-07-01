const ghpages = require("gh-pages");
const fs = require("fs");
const path = require("path");

// `out` 디렉토리에 `.nojekyll` 파일과 `CNAME` 파일을 생성
fs.writeFileSync(path.join(__dirname, "out", ".nojekyll"), "");
fs.writeFileSync(path.join(__dirname, "out", "CNAME"), "wedding-cost-calculator.com");

// `out` 디렉토리를 배포
ghpages.publish(
    "out",
    {
        dotfiles: true,
        branch: "gh-pages",
        message: "Deploy Next.js app to GitHub Pages",
    },
    (err) => {
        if (err) {
            console.error("Error publishing to gh-pages:", err);
        } else {
            console.log("Successfully published to gh-pages");
        }
    }
);
