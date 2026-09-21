module.exports = {
  apps: [{
    name: "portfolio-website",
    script: "node_modules/.bin/serve",
    args: "-s dist -l 3000",
    cwd: "/home/portfolio/Portfolio",
    interpreter: "none",
    env: {
      NODE_ENV: "production"
    },
    instances: 1,
    exec_mode: "fork",
    watch: false,
    max_memory_restart: "1G",
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    error_file: "/home/portfolio/.pm2/logs/portfolio-site-error.log",
    out_file: "/home/portfolio/.pm2/logs/portfolio-site-out.log"
  }]
};
